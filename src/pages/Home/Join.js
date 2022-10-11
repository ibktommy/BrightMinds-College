import React from "react";
import "./Join.scss";
import { Link } from "react-router-dom";

const Join = () => {
	return (
		<section className="join">
			<p>Come join us and achieve your dreams here at BrightMinds</p>
			<Link to="/register">
				<button className="btn">Register</button>
			</Link>
		</section>
	);
};

export default Join;
