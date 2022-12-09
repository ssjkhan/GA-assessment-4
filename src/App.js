import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Selector from "./components/selector/selector";
import Circles from "./components/circles/circles";

const App = () => {
	const [index, setIndex] = useState(0);

	const changeIndex = (newIndex) => {
		setIndex(newIndex);
	};

	return (
		<div className="App">
			<header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
			<main>
				<div>
					<Selector
						index={index}
						changeIndex={changeIndex}
					></Selector>
				</div>
				<Circles index={index}></Circles>
			</main>
		</div>
	);
};

export default App;
