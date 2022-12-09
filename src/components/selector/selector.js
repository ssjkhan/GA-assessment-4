import React, { useEffect } from "react";
import "./selector.css";

const Selector = ({ index, changeIndex }) => {
	const classNames = Array(4).fill("");

	classNames.forEach((_, i) => {
		if (i === index) {
			classNames[i] = "selected";
		} else {
			classNames[i] = "";
		}
	});

	return (
		<div className="CircleSelector">
			<button
				className={classNames[0]}
				onClick={() => {
					changeIndex(0);
				}}
			>
				circle 1
			</button>
			<button
				className={classNames[1]}
				onClick={() => {
					changeIndex(1);
				}}
			>
				circle 2
			</button>
			<button
				className={classNames[2]}
				onClick={() => {
					changeIndex(2);
				}}
			>
				circle 3
			</button>
			<button
				className={classNames[3]}
				onClick={() => {
					changeIndex(3);
				}}
			>
				circle 4
			</button>
		</div>
	);
};

export default Selector;
