import React from "react";
import Courses from "./Courses";
import Hero from "./Hero";
import "./Home.scss";
import Join from "./Join";
import Testimonial from "./Testimonial";

const Home = () => {
	return (
		<main>
			<Hero />
			<Courses />
			<Join />
			<Testimonial />
		</main>
	);
};

export default Home;
