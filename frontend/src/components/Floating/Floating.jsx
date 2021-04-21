import React from 'react'
import code from '../../img/blob.png'
import code2 from '../../img/code.png'
import './Floating.css'

function Floating() {
	return (
		<div>
			<img className="fancy1" src={code} alt="code"/>
			<img className="fancy2" src={code2} alt="code"/>
			<img className="fancy3" src={code} alt="code"/>
			<img className="fancy4" src={code} alt="code"/>
			<img className="fancy5" src={code2} alt="code"/>
			<img className="fancy6" src={code} alt="code"/>
			<img className="fancy7" src={code2} alt="code"/>
			<img className="fancy8" src={code2} alt="code"/>
		</div>
	)
}

export default Floating
