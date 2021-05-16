import React from "react";
import Zoom from 'react-reveal/Zoom';


function Contact() {
  return (
    <div>
      <h4 className="contact-h4-text">Contact me</h4>
      <div className="contact-container">
			<Zoom>
        <div className="contact-inner-container">
          <div className="contact-image-container">
            <img
              className="contact-image"
              src="https://aranyrichard.hu/wp-content/uploads/2021/04/contact-4.png"
              alt="location"
            ></img>
          </div>
          <p className="contact-text">BUDAPEST OR REMOTE</p>
        </div>
        <div className="contact-inner-container">
          <div className="contact-image-container">
            <img
              className="contact-image"
              src="https://aranyrichard.hu/wp-content/uploads/2021/04/contact-5.png"
              alt="phone"
            ></img>
          </div>
          <p className="contact-text">+36 30 732 9610</p>
        </div>
        <div className="contact-inner-container">
          <div className="contact-image-container">
            <img
              className="contact-image"
              src="https://aranyrichard.hu/wp-content/uploads/2021/04/contact-6.png"
              alt="email"
            ></img>
          </div>
          <p className="contact-text">richard.gold04@gmail.com</p>
        </div>
			</Zoom>
      </div>
    </div>
  );
}

export default Contact;
