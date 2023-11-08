import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Quiz() {
	return (
		<div>
			<button type="button" class="btn btn-primary">
				<Link to="/">Homepage</Link>
			</button>
			<button type="button" class="btn btn-primary">
				<Link to="/review">Review</Link>
			</button>
		</div>
	);
}

// let [questions, setQuestions] = useState([]);

// useEffect(() => {});

// const getQuestions = async function () {
// 	const response = await fetch("/api");
// 	const data = await response.json();
// 	setQuestions(data);

// 	return (
// 		<div>
// 			{questions.map((q) => (
// 				<div key={q.id}>{q.questions}</div>
// 			))}
// 		</div>
// 	);
// };
