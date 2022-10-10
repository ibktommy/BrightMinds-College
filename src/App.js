import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
