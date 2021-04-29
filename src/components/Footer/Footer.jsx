import React from 'react';
import logo from '../../assets/image/mow-logo.jpg';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-main">
				<div className="footer-left">
					<div className="footer-top">
						<img src={logo} alt="meals-on-wheels" />
						<h2>meals on wheels</h2>
					</div>

					<div className="footer-bottom">
						<FacebookIcon />
						<TwitterIcon />
						<InstagramIcon />
					</div>
				</div>

				<div className="footer-middle">
					<div className="company">
						<h4>COMPANY</h4>
						<li>Who We Are</li>
						<li>Blog</li>
						<li>Careers</li>
						<li>Report Fraud</li>
						<li>Contact</li>
					</div>
					<div className="restaurant">
						<h4>FOR RESTAURANTS</h4>
						<li>Add Restaurant</li>
						<li>Claim your Listing</li>
						<li>Business App</li>
						<li>Restaurant Widgets</li>
						<li>Product for Businesses</li>
					</div>
					<div className="for-you">
						<h4>FOR YOU</h4>
						<li>Privacy</li>
						<li>Terms</li>
						<li>Security</li>
						<li>Sitemap</li>
					</div>
				</div>

				<div className="footer-right">
					<div className="location">
						<LocationOnIcon />
						<div>
							<p>SRM University</p>
							<h5>Chennai ,Tamil Nadu</h5>
						</div>
					</div>

					<div className="phone">
						<PhoneIcon />
						<p>+1 555 123456</p>
					</div>
					<div className="mail">
						<EmailIcon />

						<p>mealsonwheelsproject@gmail.com</p>
					</div>
				</div>
			</div>

			<p>Meals on Wheels © 2021. All rights reserved.</p>
		</div>
	);
};

export default Footer;
