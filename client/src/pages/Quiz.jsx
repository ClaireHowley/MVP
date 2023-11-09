import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Quiz() {
	let [questions, setQuestions] = useState([]);
	let [currentQuestion, setCurrentQuestion] = useState(0);
	let [correctAnswer, setCorrectAnswer] = useState(false);

	useEffect(() => {
		getQuestions();
	}, []);

	async function getQuestions() {
		const response = await fetch("/api");

		const data = await response.json();
		setQuestions(data);
	}

	function nextQuestion() {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	}

	function prevQuestion() {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	}

	function isCorrectClick() {
		setCorrectAnswer(true);
	}

	return (
		<div>
			{questions.length > 0 && questions[currentQuestion] && (
				<div key={questions[currentQuestion].question_id}>
					<h4>{questions[currentQuestion].question}</h4>
					<p>
						{questions[currentQuestion].answers.map((a) => (
							<button
								key={a.answer_id}
								onClick={() => isCorrectClick(a.is_correct)}
								style={{
									backgroundColor: correctAnswer ? "green" : null,
								}}>
								{a.answer_text}
							</button>
						))}
					</p>
				</div>
			)}
			<button onClick={prevQuestion} disabled={currentQuestion === 0}>
				Previous
			</button>
			<button
				onClick={nextQuestion}
				disabled={currentQuestion === questions.length - 1}>
				Next
			</button>

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
