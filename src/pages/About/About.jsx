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

					let evenIdNum = id % 2; // Checking if id of item is an even-number or old-number

					return (
						<div
							key={id}
							className={
								evenIdNum === 0 ? "about-col reverse flex" : "about-col flex"
							}
						>
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
		</main>
	);
}

export default About;
