import React from "react";
import Directions from "../minicomponents/Directions";
import Question from "../minicomponents/Question";
import OptionsList from "../minicomponents/OptionsList";

function Play({ data }) {
	return (
		<>
			<div className="game__page">
				<Question question={data.question} />
				<div className="">
					<OptionsList select={data} />
				</div>
				<Directions />
			</div>
		</>
	);
}

export default Play;
