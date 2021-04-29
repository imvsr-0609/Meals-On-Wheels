import React from 'react';
import './SignInBottom.css';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

function SignInBottom() {
	return (
		<div className="sign-in-bottom">
			<div className="steps">
				<EditLocationOutlinedIcon style={{ fontSize: 40 }} />
				<div className="numbers">1</div>
				<h3>Choose your location</h3>
			</div>
			<div className="steps">
				<RestaurantOutlinedIcon style={{ fontSize: 40 }} />
				<div className="numbers">2</div>
				<h3>Choose restaurant</h3>
			</div>
			<div className="steps">
				<FastfoodOutlinedIcon style={{ fontSize: 40 }} />
				<div className="numbers">3</div>
				<h3>Make your order</h3>
			</div>
			<div className="steps">
				<LocalShippingOutlinedIcon style={{ fontSize: 40 }} />
				<div className="numbers">4</div>
				<h3>Food is on the way</h3>
			</div>
		</div>
	);
}

export default SignInBottom;
