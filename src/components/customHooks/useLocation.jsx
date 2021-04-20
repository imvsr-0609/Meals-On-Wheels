import { useState, useEffect } from 'react';

const useLocation = () => {
	const [position, setPosition] = useState({});
	const [error, setError] = useState(null);
	const [placeloading, setPlaceLoading] = useState(true);

	const onChange = ({ coords }) => {
		setPosition({
			latitude: coords.latitude,
			longitude: coords.longitude,
		});
		setPlaceLoading(false);
	};
	const onError = (error) => {
		setError(error.message);
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

	return { position, error, placeloading };
};

export default useLocation;
