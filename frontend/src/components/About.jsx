import React from "react";
import Loadingbar from "./Loadingbar/Loadingbar";
import Socialicons from "./Socialicons/Socialicons";
import me from "../img/me.png";

function About() {
  return (
    <div>
      <div className="about-inner-container">
        <div className="about-inner-left-container">
          <h4 className="about-h4-text">About me</h4>
          <div className="me-img-container">
            <img className="me-img" src={me} alt="mypic" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio
            scelerisque, pretium volutpat dui euismod. Integer porttitor dolor
            placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare
            at, elementum nec turpis. Donec ac interdum libero, sed condimentum
            lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in
            pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum
            sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.
          </p>
          <Socialicons />
        </div>
        <div className="about-inner-right-container">
          <h4 className="about-h4-text">My skills</h4>
          <Loadingbar />
        </div>
      </div>
    </div>
  );
}

export default About;
