import React from "react";
import "./About.scss";
import welcomeimg from "../../images/student-3.jpg";
import { SiBookstack } from "react-icons/si";
import { data } from "./AboutData";

function About() {
	return (
		<main>
			<section className="about">
				<h3>About us</h3>

				{data.map((item) => {
					const {
						id,
						title,
						header,
						text,
						iconOne,
						textTwo,
						miniTextOne,
						iconTwo,
						textThree,
						miniTextTwo,
						image,
					} = item;
					return (
						<div key={id} className="about-col flex">
							<div className="about-col_left">
								<div className="about-col_left-img">
									<img src={image} alt="about-img" />
								</div>
							</div>

							<div className="about-col_right">
								<h2>{title}</h2>
								<h4 dangerouslySetInnerHTML={{ __html: header }} />
								<p className="para">{text}</p>

								<div className="article-content">
									<article className="flex">
										{iconOne}

										<div>
											<h5>{textTwo}</h5>
											<p className="para">{miniTextOne}</p>
										</div>
									</article>
									<article className="flex">
										{iconTwo}
										<div>
											<h5>{textThree}</h5>
											<p className="para">{miniTextTwo}</p>
										</div>
									</article>
								</div>
							</div>
						</div>
					);
				})}
			</section>
			{/* <section className="about">
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

						<div className="article-content">
							<article className="flex">
								<SiBookstack />
								<div>
									<h5>Best Quality Courses</h5>
									<p className="para">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Tempora possimus voluptatum pariatur maxime sapiente!
									</p>
								</div>
							</article>
							<article className="flex">
								<SiBookstack />
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
				</div>
			</section> */}
		</main>
	);
}

export default About;
