import React from "react";
import "./Courses.scss";
import { data } from "./CourseData";

const Courses = () => {
	return (
		<section className="section-course">
			<h3>Explore our popular courses</h3>
			<div className="courses flex">
				{data.map((item) => {
					const { id, icon, course, text } = item;
					return (
						<div key={id} className="courses-item row-flex">
							{icon}
							<h4>{course}</h4>
							<p>{text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Courses;
