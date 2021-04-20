import React, { useContext, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import CartItems from '../CartItems/cartItems';
import { db } from '../../firebase';
import './Cart.css';
import { UserContext } from '../../context/UserProvider';
import Loader from '../Loader/Loader';

const Cart = ({ setShowCart, setCartNumber }) => {
	const { user } = useContext(UserContext);
	const [cartItems, setCartItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const history = useHistory();
	const cartRef = useRef();

	const dbref = db.collection(`users/${user.id}/cart`);

	const fetchCartData = () => {
		dbref.orderBy('time').onSnapshot((snapshot) => {
			const cart = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			setCartItems(cart);
			setCartNumber(cart.length);
			setLoading(false);
		});
	};

	useEffect(() => {
		fetchCartData();

		const handler = (e) => {
			if (!cartRef?.current?.contains(e.target)) {
				setShowCart(false);
			}
		};
		document.addEventListener('click', handler);
		return () => document.removeEventListener('click', handler);
	}, []);

	return (
		<div className="cart" ref={cartRef}>
			{loading ? (
				<div className="cart-loader">
					<Loader />
				</div>
			) : (
				<div className="cart-component">
					{cartItems.length ? (
						cartItems.map((cart) => <CartItems key={cart?.id} {...cart} />)
					) : (
						<h5 className="empty-cart">Cart is empty</h5>
					)}
				</div>
			)}

			{cartItems.length > 0 && (
				<button
					className="checkout-btn"
					onClick={(e) => history.push('/checkout')}
				>
					go to checkout
				</button>
			)}
		</div>
	);
};

export default Cart;
