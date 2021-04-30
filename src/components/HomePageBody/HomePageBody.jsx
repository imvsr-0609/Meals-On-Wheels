import React, { useState, useEffect } from 'react';
import './HomePageBody.css';
import Restaurant from '../Restaurant/Restaurant';
import restaurantData from './RestaurantData';
import Loader from '../Loader/Loader';

const HomePageBody = ({ toggleMenu, position, input }) => {
	const [loading, setLoading] = useState(false);
	const [updatedData, setUpdatedData] = useState(restaurantData);

	useEffect(() => {
		position !== 'null' ? setLoading(false) : setLoading(true);
		const data = restaurantData.filter(
			(restaurant) =>
				restaurant.restaurant.name
					.toLowerCase()
					.includes(input.toLowerCase()) ||
				restaurant.restaurant.cuisines
					.toLowerCase()
					.includes(input.toLowerCase()),
		);

		setUpdatedData(data);
	}, [input, position]);

	return (
		<>
			{loading ? (
				<div className="gallery-loader">
					<Loader />
				</div>
			) : (
				<div className="homepage-body">
					{updatedData.length > 0 ? (
						<h1>{updatedData.length} Restaurants in your area</h1>
					) : (
						<h1>No Restaurant Found</h1>
					)}

					<div className="restaurant-component">
						{updatedData.map((restaurant, idx) => (
							<Restaurant
								key={idx}
								toggleMenufirst={toggleMenu}
								{...restaurant}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default HomePageBody;
