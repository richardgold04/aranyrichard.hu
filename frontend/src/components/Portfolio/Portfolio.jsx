import React, { useState } from 'react'
import Reference from './Reference - one/Reference'
import references from "../../references";
import '../Radio.css'

function Portfolio() {

	const [filtered, setFiltered] = useState("All")

	let filteredReferences = references

	if (filtered !== "All"){
		filteredReferences = filteredReferences.filter((reference) => {
			return reference.platform === filtered})
	}

	return (
		<div className="portfolio-bg-container">
			<h4 className="portfolio-h4-text">Previous Projects</h4>
			<div class="toggle">
		<input name="platform" id="All" type="radio" value="All" onChange={(e) => setFiltered(e.target.value)}></input>
		<label htmlFor="All">All</label>
		<input name="platform" id="Wordpress" type="radio" value="Wordpress" onChange={(e) => setFiltered(e.target.value)}></input>
		<label htmlFor="Wordpress">Wordpress</label>
		<input name="platform" id="React" type="radio" value="React" onChange={(e) => setFiltered(e.target.value)}></input>
		<label htmlFor="React">React.JS</label>
		<input name="platform" id="Woocommerce" type="radio" value="Woocommerce" onChange={(e) => setFiltered(e.target.value)}></input>
		<label htmlFor="Woocommerce">Woocommerce</label>
		</div>

				
				
		<div className="portfolio-container">
			{filteredReferences.map((reference) => (
            <Reference key={reference.id} reference={reference} />
          ))}
		</div>
		</div>
	)
}

export default Portfolio
