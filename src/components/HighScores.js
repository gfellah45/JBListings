import React from "react";
import { Link } from "react-router-dom";

function HighScores() {
	return (
		<div className="submit">
			{" "}
			<h1 className="font-extrabold text-4xl text-green-800">
				High Scores
			</h1>{" "}
			<ul>
				<li>
					user <span>score</span>
				</li>
			</ul>
			<div className="m-8">
				<Link
					className="text-green-200 font-bold bg-green-800 px-8 py-2 shadow-lg rounded hover:bg-green-200 hover:text-green-800 border-2 border-green-800"
					to="/"
				>
					Play Again
				</Link>
			</div>
		</div>
	);
}

export default HighScores;
