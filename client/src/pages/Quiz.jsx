import React, { useEffect, useState } from "react";

export default function Quiz() {
	return <div>Quiz</div>;
}

let [questions, setQuestions] = useState([]);

useEffect(() => {});

const getQuestions = async () => {
	const response = await fetch("/api");
	const data = await response.json();
	setQuestions(data);

	return (
		<div>
			{questions.map((q) => (
				<div key={q.id}>{q.questions}</div>
			))}
		</div>
	);
};
