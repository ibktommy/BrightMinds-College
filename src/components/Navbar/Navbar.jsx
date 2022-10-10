import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="flex">
			<Link to="/">
				<div className="logo flex">
					<span>BM</span>
					<span>BrightMinds</span>
				</div>
			</Link>

			<div className="navlinks">
				<Link to="/about" className="about">About</Link>
				<Link to="/login" className="login">Login</Link>
			</div>
		</nav>
	);
};

export default Navbar;
