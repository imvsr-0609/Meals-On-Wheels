import React, { useContext } from 'react';
import './cartItems.css';
import ClearIcon from '@material-ui/icons/Clear';
import { db } from '../../firebase';
import { UserContext } from '../../context/UserProvider';

const CartItems = ({ image, item, price, quantity, id }) => {
	const { user } = useContext(UserContext);
	const dbref = db.collection(`users/${user.id}/cart`);

	const handleRemove = () => {
		dbref.doc(id).delete();
	};

	return (
		<div className="cart-items">
			<img src={image} alt="food" />
			<div className="cart-item-details">
				<p className="cart-item-name">{item}</p>
				<p>{`₹ ${price} × ${quantity}`}</p>

				<button onClick={handleRemove}>
					<ClearIcon />
				</button>
			</div>
		</div>
	);
};

export default CartItems;
