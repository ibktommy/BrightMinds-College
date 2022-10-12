import React from "react";
import "./About.scss";
import welcomeimg from "../../images/student-3.jpg";

function About() {
	return (
		<main>
			<section className="about">
				<h3>About us</h3>

				<div className="about-col flex">
					<div className="about-col_left">
						<div className="about-col_left-img">
							<img src={welcomeimg} alt="about-img" />
						</div>
					</div>

					<div className="about-col_right">
						<h2>Welcome</h2>
						<h4>
							Welcome to BrightMinds <br /> admissions page
						</h4>
						<p className="para">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Exercitationem nobis odio facere dolore nesciunt esse eveniet
							voluptatibus, iure deleniti velit?
						</p>

						<article>
							icon
							<div>
								<h5>Best Quality Courses</h5>
								<p className="para">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Tempora possimus voluptatum pariatur maxime sapiente!
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
