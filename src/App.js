import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Play from "./components/Play";
import HighScores from "./components/HighScores";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/play" exact>
				<Play />
			</Route>
			<Route path="/highscores" exact>
				<HighScores />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}

export default App;
