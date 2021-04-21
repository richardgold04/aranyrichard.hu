import React from "react";
import './Loadingbar.css'

function Loadingbar() {
  return (
    <div>
      <div className="progress-bar">
				<h4 className="loading-name">Wordpress</h4>
        <span className="bar">
          <span className="progress-wordpress"></span>7 years
        </span>
      </div>
			<div className="progress-bar">
				<h4 className="loading-name">Woocommerce</h4>
        <span className="bar">
          <span className="progress-woocommerce"></span>6 years
        </span>
      </div>
			<div className="progress-bar">
				<h4 className="loading-name">HTML, CSS</h4>
        <span className="bar">
          <span className="progress-html-css"></span>5 years
        </span>
      </div>
			<div className="progress-bar">
				<h4 className="loading-name">Vanilia Javascript</h4>
        <span className="bar">
          <span className="progress-javascript"></span>2 years
        </span>
      </div>
			<div className="progress-bar">
				<h4 className="loading-name">React</h4>
        <span className="bar">
          <span className="progress-react"></span>1 years
        </span>
      </div>
    </div>
  );
}

export default Loadingbar;
