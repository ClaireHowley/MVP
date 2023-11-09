import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Quiz() {
	let [questions, setQuestions] = useState([]);
	let [questionIndex, setQuestionIndex] = useState([]);

	useEffect(() => {
		getQuestions();
	}, []);

	async function getQuestions() {
		const response = await fetch("/api");

		const data = await response.json();
		setQuestions(data);
	}

	async function nextPrevQuestion() {
		if (next === true) {
			questions[i]++;
		} else if ((prev && questions[i] > 0) === true) {
			questions[i]--;
		} else setQuestionIndex(questions[i]);
	}

	return (
		<div>
			<ol>
				{questions.map((q) => (
					<li key={q.question_id}>
						<h4>{q.question}</h4>
						<p>
							{q.answers.map((a) => (
								<button>{a.answer_text}</button>
							))}
						</p>
					</li>
				))}
			</ol>

			<button type="button" className="btn btn-primary">
				<Link to="/">Homepage</Link>
			</button>
			<button type="button" className="btn btn-primary">
				<Link to="/review">Review</Link>
			</button>
		</div>
	);
}

export default Quiz;
