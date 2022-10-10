import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<span>Bright</span>
				<span>Minds</span>
			</div>

			<div className="navlinks">
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
};

export default Navbar;
