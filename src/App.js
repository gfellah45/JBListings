import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Game from "./components/Game";
import HighScores from "./components/HighScores";
import NotFound from "./components/NotFound";
import Submit from "./components/Submit";
import { QuizProvider } from "./context/Index";
import "./App.css";

function App() {
	return (
		<QuizProvider>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/game" exact>
					<Game />
				</Route>
				<Route path="/highscores" exact>
					<HighScores />
				</Route>
				<Route path="/submit" exact>
					<Submit />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</QuizProvider>
	);
}

export default App;
