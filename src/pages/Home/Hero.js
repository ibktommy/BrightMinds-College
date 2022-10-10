import React from "react";
import HeroImage from "../../images/student-2.jpg";
import { TbCertificate } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const Hero = () => {
	return (
		<section className="hero flex">
			<div className="hero-text">
				<h2>We are Bright Minds</h2>
				<h1>
					The only college
					<br />
					that brightens the mind
					<br />
					of students with essential
					<br />
					educational knowledge
					<br />
				</h1>
				<p className="para">
					Lorem ipsum dolor sit amet consectetur adipisicing
					<br /> elit. Modi, amet maxime magni voluptatem illum at impedit?
					<br /> Temporibus sed incidunt debitis? Lorem ipsum dolor sit amet
					<br />
					consectetur, adipisicing elit. Laborum, atque?
				</p>

				<div className="hero-button">
					<button className="btn bg">Get Started</button>
					<button className="btn">Watch Video</button>
				</div>

				<div className="hero-stat flex">
					<div className="hero-stat_content flex">
						<FaUsers />
						<div className="hero-stat_content-text">
							<p>30K+</p>
							<p>students</p>
						</div>
					</div>
					<div className="hero-stat_content flex">
						<TbCertificate />
						<div className="hero-stat_content-text">
							<p>12K+</p>
							<p>earned certificate</p>
						</div>
					</div>
					<div className="hero-stat_content flex">
						<GiTeacher />
						<div className="hero-stat_content-text">
							<p>200+</p>
							<p>skilled tutors</p>
						</div>
					</div>
				</div>
			</div>

			<div className="hero-img">
				<img src={HeroImage} alt="hero-img" />
			</div>
		</section>
	);
};

export default Hero;
