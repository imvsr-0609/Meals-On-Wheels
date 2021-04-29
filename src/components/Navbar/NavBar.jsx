import './NavBar.css';
import logo from '../../assets/image/mow-logo.jpg';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Cart from '../CartComponent/Cart';
const NavBar = ({ active }) => {
	const { user, logout } = useContext(UserContext);
	const [show, setShow] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [cartNumber, setCartNumber] = useState(0);
	return (
		<div className="navbar">
			<div className="nav-left">
				<img src={logo} alt="meals-on-wheels" />
			</div>

			<div className="nav-center" id={show ? 'responsive' : ''}>
				<Link to="/home" id={active === 'home' ? 'active' : ''}>
					home
				</Link>
				<Link to="/gallery" id={active === 'gallery' ? 'active' : ''}>
					gallery
				</Link>
				<a href="https://mealonwheels.herokuapp.com/" target="blank">
					Recommendations
				</a>
				<Link to="/about" id={active === 'about' ? 'active' : ''}>
					about
				</Link>
				<a href="#">blog</a>
				<a href="#">contact</a>
			</div>
			<div className="nav-right">
				<div className="name">
					<p>Welcome</p>
					<h3> {user?.displayName?.split(' ')[0]} </h3>
				</div>

				<button
					className="nav-btn cart-btn"
					onClick={(e) => setShowCart(!showCart)}
				>
					<ShoppingCartIcon fontSize="small" />
					{cartNumber > 0 && <p>{cartNumber}</p>}
				</button>
				<button className="nav-btn" onClick={logout}>
					<ExitToAppIcon fontSize="small" />
				</button>
				<button
					className="hamburger nav-btn"
					onClick={() => {
						setShow(!show);
					}}
				>
					{show ? (
						<CloseIcon fontSize="small" />
					) : (
						<MenuIcon fontSize="small" />
					)}
				</button>
				{showCart && (
					<Cart setShowCart={setShowCart} setCartNumber={setCartNumber} />
				)}
			</div>
		</div>
	);
};

export default NavBar;
