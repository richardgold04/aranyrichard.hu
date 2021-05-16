import React from "react";
import './Skill.css'
import Fade from 'react-reveal/Fade';

function Skill(props) {
  const { skill } = props;

  return (
		<Fade bottom>
    <div className="skill">
			<div className="skill-image-container">
			<img className="skill-image" src={skill.image} alt="skillname"></img>
			</div>
      <p className="skill-name">{skill.name}</p>
      <p className="skill-desc">{skill.description}</p>
    </div>
		</Fade>
  );
}

export default Skill;
