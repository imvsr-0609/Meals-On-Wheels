import React, { useState, useContext, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import order_logo from '../../assets/image/order.png';
import NavBar from '../../components/Navbar/NavBar';
import { useHistory } from 'react-router-dom';
import './CheckOut.css';
import CheckOutComponent from '../../components/CheckOutComponent/CheckOutComponent';
import { db } from '../../firebase';
import { UserContext } from '../../context/UserProvider';
import Loader from '../../components/Loader/Loader';

const CheckOut = () => {
	const [checkOut, setCheckout] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [numberItem, setItem] = useState(0);
	const [loading, setLoading] = useState(true);
	const [showSuccessful, setShowSuccessful] = useState(false);
	const { user } = useContext(UserContext);

	const dbref = db.collection(`users/${user.id}/cart`);

	const clearCart = () => {
		dbref.onSnapshot((snapshot) => {
			snapshot.docs.forEach((snap) => {
				dbref.doc(snap.id).delete();
			});
		});
	};

	const onToken = (token) => {
		console.log(token);
		setShowSuccessful(true);
		clearCart();
	};
	const history = useHistory();

	if (showSuccessful) {
		setTimeout(() => {
			history.push('/home');
		}, 10000);
	}

	const fetchData = () => {
		dbref.get().then((snapshot) => {
			const cart = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			setItem(snapshot.docs.length);
			setCheckout(cart);
			let p = 0;
			checkOut.forEach((check) => {
				p = p + check.price * check.quantity;
			});
			setTotalPrice(p);
			setLoading(false);
		});
	};

	useEffect(() => {
		fetchData();
	}, [checkOut]);

	return (
		<>
			<NavBar />
			{loading ? (
				<div className="checkout-loader">
					<Loader />
				</div>
			) : showSuccessful ? (
				<div className="checkout-success">
					<div className="checkout-success-body">
						<img className="order-img" src={order_logo} alt="thank you" />
						<h3>
							We have recieved your order . Our Delivery Partner will be
							reaching you soon
						</h3>
						<p>Thanks for using meals on wheels</p>
						<p>You'll be redirected to homepage now.</p>
					</div>
				</div>
			) : (
				checkOut.length > 0 && (
					<div className="checkout-page">
						<div className="checkout">
							<div className="checkout-container">
								{checkOut.map((checkout) => (
									<CheckOutComponent key={checkout.id} {...checkout} />
								))}
							</div>
							<div className="checkout-details">
								<div className="checkout-amount">
									<h4>Total : ₹ {totalPrice}</h4>
									<p>items : {numberItem}</p>
								</div>
								<div className="checkout-payment">
									<StripeCheckout
										token={onToken}
										amount={totalPrice * 100}
										billingAddress={true}
										zipCode={true}
										currency="INR"
										stripeKey="pk_test_51IZWtCSCJfNakBBBsdpV2waEIDx0xg9TPpZOKoXCxspFAE9ge9cOlwlDMaXD9Q8X9HQoejU5SjJpsKHxymGNrfKi00QQvQPSLN"
									/>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</>
	);
};

export default CheckOut;
