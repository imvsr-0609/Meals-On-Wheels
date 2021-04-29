import React, { useState, useEffect, useRef } from 'react';
import './HomePageTop.css';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';

const HomePageTop = ({ setposition, input, setInput }) => {
	const [position, setPosition] = useState({});
	const [error, setError] = useState(null);
	const [city, setCity] = useState('');
	const [placeloading, setPlaceLoading] = useState(true);
	const [loading, setLoading] = useState(true);

	const onChange = ({ coords }) => {
		setPosition({
			latitude: coords.latitude,
			longitude: coords.longitude,
		});

		setPlaceLoading(false);
		setposition(position);
	};
	const onError = (error) => {
		setError(error.message);
	};

	const inputRef = useRef();

	const fetchCity = async () => {
		try {
			if (position && !placeloading) {
				await fetch(
					`https://api.opencagedata.com/geocode/v1/json?key=4ccd7a3b2350430e938787d3edde7468&q=${position.latitude}%2C${position.longitude}&pretty=1`,
				)
					.then((res) => res.json())
					.then((data) =>
						setCity(data?.results[0]?.components?.state_district),
					);

				setLoading(false);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError('Geolocation is not supported');
			return;
		}
		const watcher = geo.watchPosition(onChange, onError);
		return () => geo.clearWatch(watcher);
	}, []);

	useEffect(() => {
		fetchCity();
	});

	return (
		<div className="homepage-top">
			<h1>Meals On Wheels</h1>
			<h3>
				<span>Hungry ?</span> You're in the right place.
			</h3>
			<div className="search">
				<div className="user-location">
					<RoomIcon />
					{loading ? <p> ...</p> : <p>{city}</p>}
				</div>
				<div className="search-input">
					<SearchIcon />
					<input
						type="text"
						placeholder="Search for restaurant or cuisine... "
						value={input}
						ref={inputRef}
						onChange={() => {
							setInput(inputRef.current.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePageTop;
