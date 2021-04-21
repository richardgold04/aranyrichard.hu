import React from "react";
import './Loadingbar.css'

function Loadingbar() {
  return (
    <div>
      <div class="progress-bar">
				<h4 className="loading-name">Wordpress</h4>
        <span className="bar">
          <span class="progress-wordpress"></span>7 years
        </span>
      </div>
			<div class="progress-bar">
				<h4 className="loading-name">Woocommerce</h4>
        <span className="bar">
          <span class="progress-woocommerce"></span>6 years
        </span>
      </div>
			<div class="progress-bar">
				<h4 className="loading-name">HTML, CSS</h4>
        <span className="bar">
          <span class="progress-html-css"></span>5 years
        </span>
      </div>
			<div class="progress-bar">
				<h4 className="loading-name">Vanilia Javascript</h4>
        <span className="bar">
          <span class="progress-javascript"></span>2 years
        </span>
      </div>
			<div class="progress-bar">
				<h4 className="loading-name">React</h4>
        <span className="bar">
          <span class="progress-react"></span>1 years
        </span>
      </div>
    </div>
  );
}

export default Loadingbar;
