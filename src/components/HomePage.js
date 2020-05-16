import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/Index";

function HomePage() {
	const { loadQuestions } = useContext(QuizContext);

	const questions = (id) => {
		loadQuestions(id);
	};
	return (
		<div className=" home__page">
			<h2 className="text-3xl font-extrabold text-green-800 p-2 m-2">
				Welcome
			</h2>
			<p className="text-green-800 font-medium mb-4 text-2xl">
				Do you have what it takes?{" "}
			</p>
			<Link
				className="bg-green-800 w-32 hover:bg-green-300 hover:text-green-800 hover:border-green-800 border-t-2 border-b-2 rounded p-4 m-2 text-center text-green-200 border-green-200 cursor-pointer font-bold text-sm shadow-lg w-42"
				to="/game"
				onClick={() => questions(0)}
			>
				Play
			</Link>

			<Link
				className="bg-green-800 w-32 hover:bg-green-300 hover:text-green-800 hover:border-green-800 border-t-2 border-b-2 rounded p-4 m-2 text-center text-green-200 border-green-200 cursor-pointer font-bold text-sm shadow-lg w-42"
				to="/highscores"
			>
				High Scores
			</Link>
		</div>
	);
}

export default HomePage;
