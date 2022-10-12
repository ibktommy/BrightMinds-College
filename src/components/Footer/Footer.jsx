import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Logo from "../Logo/Logo";
import "./Footer.scss";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer-container flex">
				<div className="footer-container-left">
					<Logo />
					<p className="para">
						A place to learn to become <br />
						a professional in your chosen <br />
						course of study.
					</p>
					<div className="footer-container-left_socials">
						<FaFacebook className="socials" />
						<FaGithub className="socials" />
						<FaTwitter className="socials" />
					</div>
				</div>
				<div className="footer-container-right flex">
					<div className="footer-container-right_list">
						<h4>Courses</h4>
						<div className="footer-container-right_list-items">
							<p>Engineering</p>
							<p>Accounting</p>
							<p>Nursing</p>
							<p>Art</p>
						</div>
					</div>
					<div className="footer-container-right_list">
						<h4>Support</h4>
						<div className="footer-container-right_list-items">
							<p>About Us</p>
							<p>Careers</p>
							<p>Blog</p>
							<p>Blog</p>
						</div>
					</div>
					<div className="footer-container-right_list">
						<h4>Categories</h4>
						<div className="footer-container-right_list-items">
							<p>Scholarship</p>
							<p>Teacher</p>
							<p>Programmes</p>
							<p>Tution Fee</p>
						</div>
					</div>
					<div className="footer-container-right_list">
						<h4>Contact</h4>
						<div className="footer-container-right_list-items">
							<p>L1 Garden Street, Ekiti, Nigeria</p>
							<p>+234 810 123 4567</p>
							<p>brightminds@email.com</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
