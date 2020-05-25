import React, { createContext, useReducer } from "react";

const initialState = {
	questions: [
		{
			id: 1,
			question: "In past times, what would a gentleman keep in his fob pocket?",
			answer: 2,
			answers: ["Notebook", "Keys", "Money", "Watch"],
		},
		{
			id: 2,
			question: "What is the name of the Jewish New Year?",
			answer: 3,
			answers: ["Elul", "New Year", "Rosh Hashanah", "Watch"],
		},
		{
			id: 3,
			question: "How many colors are there in a rainbow?",
			answer: 3,
			answers: [8, 9, 7, 6],
		},
	],
	availableQuestion: [],
	loadCurrentQuestion: [],
};

const quizAction = {
	ADD_Q: "ADD_Q",
	CURRENT_Q: "CURRENT_Q",
};

// reducer
const QuizReducer = (state, action) => {
	switch (action.type) {
		case quizAction.ADD_Q:
			return {
				...state,
				questions: state.questions.slice(
					action.payload,
					state.questions.length
				),
			};
		case quizAction.CURRENT_Q:
			return {
				...state,
				loadCurrentQuestion: state.availableQuestion.splice(action.payload, 1),
			};
		default:
			return state;
	}
};

// initializing the context
export const QuizContext = createContext(initialState);

// provider function
export function QuizProvider({ children }) {
	const [state, dispatch] = useReducer(QuizReducer, initialState); //use reducer function

	// actions
	const loadQuestions = (id) => {
		dispatch({
			type: quizAction.ADD_Q,
			payload: id,
		});
	};
	const currentQuestion = (index) => {
		dispatch({
			type: quizAction.CURRENT_Q,
			payload: index,
		});
	};

	// action end

	return (
		<QuizContext.Provider
			value={{
				questions: state.questions,
				loadQuestions: loadQuestions,
				currentQuestion: currentQuestion,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}
