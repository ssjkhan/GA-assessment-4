import React, { useEffect } from "react";
import "./circle.css";

const Circles = ({ index }) => {
	const classNames = Array(4).fill("");

	classNames.forEach((_, i) => {
		if (i === index) {
			classNames[i] = "selected";
		} else {
			classNames[i] = "";
		}
	});

	return (
		<div className="Circles">
			<div className={classNames[0]}>1</div>
			<div className={classNames[1]}>2</div>
			<div className={classNames[2]}>3</div>
			<div className={classNames[3]}>4</div>
		</div>
	);
};

export default Circles;
