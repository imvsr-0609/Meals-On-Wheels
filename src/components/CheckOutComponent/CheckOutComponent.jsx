import React, { useContext } from 'react';
import './CheckOutComponent.css';
import { db } from '../../firebase';
import { UserContext } from '../../context/UserProvider';

const CheckOutComponent = ({
	image,
	item,
	price,
	quantity,
	description,
	id,
}) => {
	const { user } = useContext(UserContext);
	const dbref = db.collection(`users/${user.id}/cart`);

	const handleIncrement = () => {
		dbref.doc(id).update({ quantity: quantity + 1 });
	};

	const handleDecrement = () => {
		if (quantity === 1) {
			return;
		}
		dbref.doc(id).update({ quantity: quantity - 1 });
	};

	return (
		<div className="checkout-component">
			<div className="checkout-component-left">
				<img src={image} alt="food" />
				<div className="checkout-item-details">
					<p>{item}</p>
					<p className="checkout-price">₹ {price}</p>
					<p className="checkout-description">{description}</p>
				</div>
			</div>
			<div className="checkout-component-right">
				<button onClick={handleDecrement}>-</button>
				<p>{quantity}</p>
				<button onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
};

export default CheckOutComponent;
