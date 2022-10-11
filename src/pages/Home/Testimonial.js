import React from "react";
import { Link } from "react-router-dom";
import "./Testimonial.scss";
import studentImg from "../../images/student-3.jpg";
import { students } from "./TestimonialData";

const Testimonial = () => {
  // SLIDER FUNCTIONALITY
  

	return (
		<section className="testimonial">
			<h3>Testimonial</h3>

			<div className="testimonial-content flex">
				<div className="testimonial-content-left">
					<h4>
						see what our students <br /> say about us
					</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
						ipsum dignissimos odio incidunt quaerat ut. Lorem ipsum dolor sit
						amet, consectetur adipisicing elit. Aliquid, praesentium.
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatibus, ipsum?
					</p>

					<Link to="/about">
						<button className="btn bg">See More</button>
					</Link>
				</div>

				<div className="testimonial-content-right">
					<div className="slider flex">
						{students.map(({ id, name, image, course, text }) => (
							<div key={id} className="testimonial-content-right_box">
								<p className="para">{text}</p>
								<article className="flex">
									<img src={image} alt={name} />
									<div>
										<p className="name">{name}</p>
										<p className="course">{course}</p>
									</div>
								</article>
							</div>
						))}
					</div>

					<div className="slider-content">
						<button className="slider-content_btn"></button>
						<button className="slider-content_btn"></button>
						<button className="slider-content_btn"></button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
