import React from "react";
import skills from "../../skills";
import Skill from "./Skill - one/Skill";

function Skills() {
  return (
    <div className="skills-container">
      <h4 className="skill-h4-text">Services what i done before</h4>
      <div className="skill-inner-container">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
