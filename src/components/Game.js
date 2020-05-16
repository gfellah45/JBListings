import React, { useState, useContext } from "react";
import Play from "./Play";
import { QuizContext } from "../context/Index";
import { useHistory } from "react-router-dom";

function Game() {
	const { questions } = useContext(QuizContext);

	const [index, setIndex] = useState(0);
	const [answer, setAnswer] = useState(0);
	const history = useHistory();
	const copiedQuestion = [...questions];
	const currentQuestion = copiedQuestion.splice(index, copiedQuestion.length);
	const counter = (userChoice, correctAns) => {
		setIndex(index + 1);
		if (userChoice === correctAns) setAnswer(answer + 10);
	};
	const directions = (sign) => {
		sign === "-" ? setIndex(index - 1) : setIndex(index + 1);
	};
	const isQuestionAvailable = currentQuestion.length === 0;

	if (isQuestionAvailable) {
		history.push("/highscores");
	}
	console.log(answer);

	return (
		<section className="game">
			{currentQuestion.map((ques) => (
				<Play
					key={ques.id}
					data={ques}
					counter={counter}
					directions={directions}
				/>
			))}
		</section>
	);
}

export default Game;
