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
			setQuestionData({ ...questionData, question: value }); // we update all of the ...questionData object
		} else if (name === "answer") {
			const updatedAnswers = [...questionData.answers]; // cretaing a shallow copy of the questionData.answers array
			updatedAnswers[index].text = value; // updatedAnswers[index] retrieves ONE answer object at the GIVEN INDEX, and .text = value updates ONE text property with the new value that is entered
			setQuestionData({ ...questionData, answers: updatedAnswers });
		} else if (name === "checkbox") {
			const updatedAnswers = questionData.answers.map((answer, i) => {
				return index === i
					? { ...answer, isCorrect: checked }
					: { ...answer, isCorrect: false }; // ensures only one checkbox at a time can be ticked
			});
			setQuestionData({ ...questionData, answers: updatedAnswers });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault(); //prevents the default form submission behavior (page reload)
		console.log("submitted!");

		// fetch content here

		try {
			const response = await fetch("", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(questionData),
			});
			const data = await response.json();
			console.log("here:", data);

			setQuestionData({
				// reset after successsful passing of data
				question: "",
				answers: [
					{ text: "", isCorrect: false },
					{ text: "", isCorrect: false },
					{ text: "", isCorrect: false },
				],
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Add a question</h1>
			<form className="questionAndAnswerSubmitBox" onSubmit={handleSubmit}>
				<label>
					Question:
					<input
						type="text"
						name="question"
						value={questionData.question}
						onChange={handleChange}
					/>
				</label>
				<div></div>
				<label>
					Answers:
					{questionData.answers.map((answer, index) => (
						<div key={index}>
							<input
								type="text"
								name="answer"
								value={answer.text}
								onChange={(e) => handleChange(e, index)}
							/>
							<input
								type="checkbox"
								name="checkbox"
								checked={answer.isCorrect}
								onChange={(e) => handleChange(e, index)} // wrapped as a function so you can pass the index (arrow fn to stop the fn being called immediately when the page renders). "e" is the event object
							/>
						</div>
					))}
				</label>
				<input type="submit" value="Submit" />
			</form>
			<button type="button" className="reviewHomepageButton">
				<Link to="/">Homepage</Link>
			</button>
			<button type="button" className="reviewQuizButton">
				<Link to="/quiz">Quiz</Link>
			</button>
		</div>
	);
}
