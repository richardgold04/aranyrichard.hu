import React from 'react'
import Floating from './Hero - floating icons/Floating';
import Mousescroll from './Hero - mousescroll/Mousescroll';
import Zoom from 'react-reveal/Zoom';

function Hero() {
	return (
		<div className="hero-container">
			<Zoom>
			<div className="hero-logo-container">
			<img src="https://aranyrichard.hu/wp-content/uploads/2021/05/logo-white.png" alt="logo" className="logo"></img>
			</div>
			</Zoom>
			<Floating />
			<Zoom>
			<h4 className="hero-h4-text">Hello, i am</h4>
			<h1 className="hero-h1-text">Richard Arany</h1>
			<h3 className="hero-h3-text">Frontend developer</h3>
			<button className="hero-btn">download cv</button>
			</Zoom>
			<Mousescroll />
			
		</div>
	)
}

export default Hero
