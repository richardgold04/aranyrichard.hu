import React from "react";
import Fade from "react-reveal/Fade";

function Job(props) {
  const { job } = props;

  return (
    <Fade bottom>
      <div className={`${job.type}-job`}>
        <p className="date-text">{job.date}</p>
        <p className="role-text">{job.role}</p>
        <p className="company-text">
          <em>Type: {job.type}</em>
        </p>
        <p className="company-text">
          At: <strong>{job.company}</strong>
        </p>
        <p className="job-desc">
          <strong>About:</strong> <br></br>
          {job.description}
        </p>
      </div>
    </Fade>
  );
}

export default Job;
