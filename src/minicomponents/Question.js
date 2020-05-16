import React from "react";

function Question({ question }) {
	return (
		<div>
			<div className="ques__container text-2xl mb-4 text-green-800 font-bold px-2">
				<span className="italics">{question}</span>
			</div>
		</div>
	);
}

export default Question;
