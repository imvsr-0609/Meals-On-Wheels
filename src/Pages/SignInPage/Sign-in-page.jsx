import React from 'react';
import SignInBottom from '../../components/SignInbottom/SignInBottom';
import SignInTop from '../../components/SignIntop/SignInTop';
import './Sign-in-page.css';

function SignInPage() {
	return (
		<div className="sign-in-page">
			<SignInTop />
			<SignInBottom />
		</div>
	);
}

export default SignInPage;
