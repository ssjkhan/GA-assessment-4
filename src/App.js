import React from "react";
import "./App.css";
import Selector from "./components/selector/selector";
import Circles from "./components/circles/circles";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
			<main>
				<div>
					<Selector></Selector>
				</div>
				<Circles></Circles>
			</main>
		</div>
	);
};

export default App;
