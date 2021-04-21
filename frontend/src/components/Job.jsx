import React from "react";

function Job(props) {
  const { job } = props;

  return (
    <div className="job">
			<div className="white-line"></div>
      <p className="date-text">{job.date}</p>
      <p className="role-text">{job.role}</p>
      <p className="company-text">Company: {job.company}</p>
      <p className="job-desc"><strong>About the job:</strong> <br></br>{job.description}
      </p>
    </div>
  );
}

export default Job;
