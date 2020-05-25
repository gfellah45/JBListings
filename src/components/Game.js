import React, { useContext } from "react";
import Play from "./Play";
import { QuizContext } from "../context/Index";
// import { useHistory } from "react-router-dom";

function Game() {
	const { questions } = useContext(QuizContext);
	console.log(questions);
	return (
		<>
			<section className="game">
				{questions.map((ques) => (
					<Play key={ques.id} data={ques} />
				))}
			</section>
		</>
	);
}

export default Game;
