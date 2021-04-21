import React from "react";
import jobs from "../jobs";
import Job from "./Job";

function Experience() {
  return (
    <div>
      <div className="experience-inner-container">
        <div className="experience-inner-left-container">
          <h4 className="experience-h4-text">My experiences</h4>
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
