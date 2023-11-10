import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Quiz() {
	let [questions, setQuestions] = useState([]);
	let [currentQuestion, setCurrentQuestion] = useState(0);
	let [selectedAnswer, setSelectedAnswer] = useState();
	let [message, setMessage] = useState("");
	let [score, setScore] = useState(0);

	useEffect(() => {
		getQuestions();
	}, []);

	useEffect(() => {
		checkAnswer(); // will run checkAnswer only after selectedAnswer is set
	}, [selectedAnswer]);

	async function getQuestions() {
		const response = await fetch("/api");

		const data = await response.json();
		setQuestions(data);
	}

	function nextQuestion() {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedAnswer(false);
			setMessage(null);
		}
	}

	function prevQuestion() {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
			setSelectedAnswer(false);
		}
	}

	function isCorrectClick(answer) {
		setSelectedAnswer(answer.answer_id);
		console.log("Selected Answer:", selectedAnswer);
	}

	function checkAnswer() {
		questions.forEach((question) => {
			const selectedAnswerObject = question.answers.find(
				(a) => a.answer_id === selectedAnswer
			);

			if (selectedAnswerObject && selectedAnswerObject.is_correct) {
				setMessage("Well done!");
				setScore((prevScore) => prevScore + 1);
			}

			if (selectedAnswerObject && !selectedAnswerObject.is_correct) {
				setMessage("Explanation!...");
			}
		});
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
								onClick={() => isCorrectClick(a)}
								style={{
									backgroundColor:
										a.answer_id === selectedAnswer
											? a.is_correct
												? "green"
												: "red"
											: null,
								}}
								disabled={selectedAnswer}>
								{a.answer_text}
							</button>
						))}
					</p>
					<p>{message}</p>
					<p>Score: {score}</p>
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
