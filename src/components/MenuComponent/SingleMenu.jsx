import React, { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { db } from '../../firebase';
import firebase from 'firebase';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const SingleMenu = ({ name, description, image, price }) => {
	const { user } = useContext(UserContext);
	const dbref = db.collection(`users/${user.id}/cart`);

	const addItem = () => {
		dbref.add({
			email: user.email,
			image: image,
			item: name,
			price: price,
			quantity: 1,
			description: description,
			time: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	return (
		<div className="single-menu">
			<div className="menu-left">
				<div className="menu-img">
					<img src={image} alt="Menu" />
				</div>
				<div className="menu-details">
					<h3>{name}</h3>
					<p>₹ {price}</p>
					<p>{description}</p>
				</div>
			</div>
			<button onClick={addItem}>
				<p style={{ fontWeight: 'bold', fontSize: '12px' }}>Add</p>
				<AddShoppingCartIcon />
			</button>
		</div>
	);
};

export default SingleMenu;
