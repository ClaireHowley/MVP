import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SubmitQuestion() {
	const [questionData, setQuestionData] = useState({
		question: "", // "question" is the name of the input fields in the event that is triggered, value is what is entered (e.target,name, e.target.value)
		answers: [
			{ text: "", isCorrect: false },
			{ text: "", isCorrect: false },
			{ text: "", isCorrect: false }, // text and isCorrect are the names of the input fields
		],
	}); // note: e.target = html input hat triggered the event (input field/button/checkbox)

	const handleChange = (e, index) => {
		const { name, value, checked } = e.target; // destructuring
		// same as below (these are properties(.name) from the element(e.target) that triggered the event)
		//const name = e.target.name;
		//const value = e.target.value;
		//const type = e.target.type;
		// const checked = e.target.checked;

		if (name === "question") {
			setQuestionData({ ...questionData, question: value });
		} else if (name === "answer") {
			const updatedAnswers = questionData.answers.map((answer) => {
				return { ...answer, text: value, isCorrect: checked };
			});
			setQuestionData({ ...questionData, answers: updatedAnswers });
		}
	};

	return (
		<div>
			<h1>Add a question</h1>
			<form className="questionBox"></form>
			<button type="button" className="reviewHomepageButton">
				<Link to="/">Homepage</Link>
			</button>
			<button type="button" className="reviewQuizButton">
				<Link to="/quiz">Quiz</Link>
			</button>
		</div>
	);
}
