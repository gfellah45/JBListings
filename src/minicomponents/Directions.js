import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
function Directions({ directions }) {
	return (
		<div className="flex justify-between mt-8">
			<button onClick={() => directions("-")}>
				<FaAngleDoubleLeft color="#276749" size="2rem" />
			</button>
			<button onClick={() => directions("+")}>
				<FaAngleDoubleRight color="#276749" size="2rem" />
			</button>
		</div>
	);
}

export default Directions;
