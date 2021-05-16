import React from "react";
import Loadingbar from "./About - loading bars/Loadingbar";
import Socialicons from "./About - social icons/Socialicons";
import me from "../../img/me.png";
import Zoom from "react-reveal/Zoom";

function About() {
  return (
    <div>
      <div className="about-inner-container">
        <div className="about-inner-left-container">
          <Zoom>
            <h4 className="about-h4-text">About me</h4>
          </Zoom>
          <Zoom>
            <div className="me-img-container">
              <img className="me-img" src={me} alt="mypic" />
            </div>
          </Zoom>
          <Zoom>
            <p className="about-p-text">
              I have been working on digital projects for almost 10 years.
              During this time, I also created websites and webshops in
              Wordpress. I worked online, working from traditional SMEs to
              startups. I’ve also been involved in founding an influencer agency
              and planning the online presence of a music startup.
            </p>
          </Zoom>
          <Socialicons />
        </div>
        <div className="about-inner-right-container">
          <Zoom>
            <h4 className="about-h4-text">My skills</h4>
          </Zoom>
          <Loadingbar />
        </div>
      </div>
    </div>
  );
}

export default About;
