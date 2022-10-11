import React from "react";
import Courses from "./Courses";
import Hero from "./Hero";
import "./Home.scss";

const Home = () => {
	return (
		<main>
			<Hero />
			<Courses />
		</main>
	);
};

export default Home;
