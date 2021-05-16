import React from 'react'
import './CallToAction.css'
import Slide from 'react-reveal/Slide';


function CallToAction() {
	return (
		<div className="calltoaction-container">
			<Slide left>
			<h2 className="calltoaction-text">Do you need a website now?</h2>
			</Slide>
			<Slide right>
			<button className="calltoaction-btn">Order at AR-DIGITAL.com</button>
			</Slide>
		</div>
	)
}

export default CallToAction
