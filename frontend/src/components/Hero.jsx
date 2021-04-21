import React from 'react'
import logo from '../img/AR logo_light.png';
import Floating from './Floating/Floating';
import Mousescroll from './Mousescroll';

function Hero() {
	return (
		<div className="hero-container">
			<div className="hero-logo-container">
			<img src={logo} alt="logo" className="logo"></img>
			</div>
			<Floating />
			<h4 className="hero-h4-text">Hello, i am</h4>
			<h1 className="hero-h1-text">Richard Arany</h1>
			<h3 className="hero-h3-text">Frontend developer</h3>
			<button className="hero-btn">download cv</button>
			<Mousescroll />
		</div>
	)
}

export default Hero
