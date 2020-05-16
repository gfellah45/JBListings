import React from "react";
import Directions from "../minicomponents/Directions";
import Question from "../minicomponents/Question";
import Options from "../minicomponents/Options";

function Play({ data, counter, directions }) {
	return (
		<div className="game__page">
			<Question question={data.question} />
			<div className="">
				<Options counter={counter} answers={data.answers} ans={data.answer} />
			</div>
			<Directions directions={directions} />
		</div>
	);
}

export default Play;
