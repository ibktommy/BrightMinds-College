import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="flex">
			<Logo />

			<div className="navlinks">
				<Link to="/about" className="about">
					About
				</Link>
				<Link to="/login" className="login">
					Login
				</Link>
				<Link to="/register" className="register">
					Register
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
