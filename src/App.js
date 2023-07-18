import React from "react";
import "./App.css";
import {
	Blog,
	Features,
	Footer,
	Header,
	Possiblity,
	WhatGPT3,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>

			<Brand />

			<WhatGPT3 />
			<Features />
			<Possiblity />
			<Cta />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
