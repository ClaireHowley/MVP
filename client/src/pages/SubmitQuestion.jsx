import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SubmitQuestion() {
	const [questionData, setQuestionData] = useState({
		question: "",
		answers: [{ text: "", isCorrect: false }],
	});

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
