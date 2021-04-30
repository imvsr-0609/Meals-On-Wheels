import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import './AboutPage.css';
import aboutData from './aboutData';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tilt from 'react-parallax-tilt';
import Footer from '../../components/Footer/Footer';

const AboutPage = () => {
	return (
		<div className="about-page">
			<NavBar active={'about'} />

			<div className="about-body">
				<h1>
					About <span>US</span>
				</h1>
				<div className="about-component">
					{aboutData.map((data, idx) => (
						<Tilt scale="1.05">
							<div className="about-card" key={idx}>
								<img src={data.profile} alt={data.name} />

								<div className="about-description">
									<a href={data.github} target="blank">
										<GitHubIcon />
									</a>

									<h3>{data.name}</h3>
									<h5>{data.role}</h5>
									<p>{data.contribution} </p>
								</div>
							</div>
						</Tilt>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
