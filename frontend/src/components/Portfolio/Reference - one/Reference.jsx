import React from "react";
import "./Reference.css";
import Fade from 'react-reveal/Fade';


function Reference(props) {
  const { reference } = props;

  return (
		<Fade bottom>
		<div className="reference-name-container">
      <div className="record">
        <div id="record1" className="record-display" style={{ background: `url(${reference.image})` }}>
				</div>
        <div className="record-desc">
				<h1 className="reference-name-text">{reference.name}</h1>
          <p className="reference-desc-text">{reference.description}</p>
					<h1 className="reference-platform-text">{reference.platform}</h1>
        </div>
      </div>		
			</div>
			</Fade>
  );
}

export default Reference;
