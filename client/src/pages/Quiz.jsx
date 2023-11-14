import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Quiz() {
	let [questions, setQuestions] = useState([]);
	let [currentQuestion, setCurrentQuestion] = useState(0);
	let [quizEnded, setQuizEnded] = useState(false);

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
			setQuizEnded(false);
		}
	}

	function isCorrectClick(answer, question_id) {
		setQuestions((questions) =>
			questions.map((q) => {
				// if the current question is the one we were answering,
				if (q.question_id === question_id) {
					// store the answer_id as the selected answer for that question,
					return { ...q, selectedAnswer: answer.answer_id };
				} else {
					return q;
				}
				// otherwise, leave the question as it was
			})
		);
		if (currentQuestion === questions.length - 1) {
			setQuizEnded(true);
		}
	}

	function getScore() {
		let score = 0;

		for (const q of questions) {
			const correct = q.answers.find((a) => a.is_correct);
			if (correct.answer_id === q.selectedAnswer) score++;
		}

		return score;
	}

	const score = getScore();

	return (
		<div>
			<div className="quizHomepageReviewButtons">
				<button type="button" id="quizHomePageButton">
					<Link to="/">Homepage</Link>
				</button>

				<button type="button" id="quizReviewButton">
					<Link to="/review">Review</Link>
				</button>
			</div>

			<div className="quizAnswerButtons">
				{questions.length > 0 && questions[currentQuestion] ? (
					<div key={questions[currentQuestion].question_id}>
						<h4>{questions[currentQuestion].question}</h4>
						<p>
							{questions[currentQuestion].answers.map((a) => (
								<button
									key={a.answer_id}
									onClick={() =>
										isCorrectClick(a, questions[currentQuestion].question_id)
									}
									style={{
										backgroundColor:
											a.answer_id === questions[currentQuestion].selectedAnswer
												? a.is_correct
													? "green"
													: "red"
												: null,
									}}
									disabled={
										questions[currentQuestion].selectedAnswer
											? "disabled"
											: null
									}>
									{a.answer_text}
								</button>
							))}
						</p>
						<p>Score: {score}</p>
					</div>
				) : null}

				{quizEnded &&
					(score > 6 ? (
						<p>Your score is {score}/10, well done!</p>
					) : (
						<p>Your score is {score}/10, keep working hard!</p>
					))}

				<button onClick={prevQuestion} disabled={currentQuestion === 0}>
					Previous
				</button>
				<button
					onClick={nextQuestion}
					disabled={currentQuestion === questions.length - 1}>
					Next
				</button>
			</div>
		</div>
	);
}

export default Quiz;
