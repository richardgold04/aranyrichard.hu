import React from "react";
import jobs from "../../jobs";
import Job from "./Job";
import { useState } from 'react'

function Experience() {


	const [filtered, setFiltered] = useState("All")

	let filteredJobs = jobs

	if (filtered !== "All"){
		filteredJobs = filteredJobs.filter((job) => {
			return job.type === filtered})
	}


  return (
    <div>
      <div className="experience-inner-container">
        <div className="experience-inner-left-container">
          <h4 className="experience-h4-text">Experiences</h4>
					<div class="toggle" id="experience-radio">
		<input name="type" id="Jobs" type="radio" value="Jobs" onChange={(e) => setFiltered(e.target.value)}></input>
		<label htmlFor="Jobs">Jobs</label>
		<input name="type" id="Schools" type="radio" value="Schools" onChange={(e) => setFiltered(e.target.value)}></input>
		<label for="Schools">Schools</label>
		</div>
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
