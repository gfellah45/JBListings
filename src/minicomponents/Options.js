import React, { useContext } from "react";
import { QuizContext } from "../context/Index";
function Options({ select, counter }) {
	const { answers } = select;
	const { loadQuestions } = useContext(QuizContext);

	return (
		<>
			{answers.map((each, idx) => {
				let options = ["A", "B", "C", "D"];
				return (
					<div
						key={idx}
						className="choice__container  w-64 cursor-pointer border-2 border-green-800 rounded shadow-lg"
					>
						<p className="choice__prefix w-8 px-6 py-3 bg-green-800 text-green-200">
							{options[idx]}
						</p>
						<p
							className="choice__text text-green-800 bg-green-200 hover:bg-green-800 hover:text-green-200"
							data-number="4"
							onClick={() => loadQuestions(1)}
						>
							{each}
						</p>
					</div>
				);
			})}
		</>
	);
}

export default Options;
