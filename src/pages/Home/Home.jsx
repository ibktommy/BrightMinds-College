import React from "react";
import Courses from "./Courses";
import Hero from "./Hero";
import "./Home.scss";
import Join from "./Join";

const Home = () => {
	return (
		<main>
			<Hero />
			<Courses />
			<Join />
		</main>
	);
};

export default Home;
