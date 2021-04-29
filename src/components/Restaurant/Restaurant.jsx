import React from 'react';
import './Restaurant.css';

const Restaurant = (props) => {
	const { toggleMenufirst, restaurant } = props;

	return (
		<div className="restaurant-card" onClick={toggleMenufirst}>
			{restaurant?.featured_image ? (
				<img src={restaurant.featured_image} alt="restaurant" />
			) : (
				<img
					src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
					alt="restaurant"
				/>
			)}

			<div className="restaurant-details">
				<h3 style={{ color: 'black', fontSize: '18px' }}>{restaurant.name}</h3>
				<p>{restaurant.cuisines}</p>
				<p>{restaurant.location.address}</p>

				<div className="restaurant-specs">
					<p
						style={{
							color: `#${restaurant.user_rating.rating_color}`,
							fontWeight: 'bold',
						}}
					>
						{restaurant.user_rating.aggregate_rating} ★
					</p>
					<p>·</p>
					<p>{restaurant.user_rating.rating_text}</p>
					<p>·</p>
					<p>₹ {restaurant?.average_cost_for_two} for two</p>
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
