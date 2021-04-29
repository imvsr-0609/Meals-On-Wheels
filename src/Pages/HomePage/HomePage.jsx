import React, { useState } from 'react';

import './HomePage.css';
import NavBar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePageTop from '../../components/HomePageTop/HomePageTop';
import HomePageBody from '../../components/HomePageBody/HomePageBody';

import MenuCard from '../../components/MenuComponent/Menu';

function HomePage() {
	const [showMenu, setShowMenu] = useState(false);
	const [position, setPosition] = useState(null);
	const [input, setInput] = useState('');

	const toggleMenu = () => {
		setShowMenu(true);
	};
	const closetoggleMenu = () => {
		setShowMenu(false);
	};

	return (
		<div className="homepage">
			<NavBar active={'home'} />
			{showMenu && <MenuCard closetoggleMenu={closetoggleMenu} />}
			<HomePageTop
				input={input}
				setInput={setInput}
				setposition={setPosition}
			/>
			<HomePageBody input={input} toggleMenu={toggleMenu} position={position} />
			<Footer />
		</div>
	);
}

export default HomePage;
