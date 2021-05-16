import React from "react";
import "./Socialicons.css";

function Socialicons() {
  return (
    <div>
      <div className="footer-social-icons">
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/richard.arany/" target="_blank" rel="noreferrer" className="social-icon">
              {" "}
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/richardarany/" target="_blank" rel="noreferrer" className="social-icon">
              {" "}
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/richardgold04" target="_blank" rel="noreferrer" className="social-icon">
              {" "}
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://aranyrichard.hu/" target="_blank" rel="noreferrer" className="social-icon">
              {" "}
              <i className="fa fa-wordpress"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Socialicons;
