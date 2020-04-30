import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<Link to="/play">Play</Link>
			<Link to="/highscores">High Scores</Link>
		</div>
	);
}

export default HomePage;
