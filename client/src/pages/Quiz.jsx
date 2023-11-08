import React, { useEffect, useState } from "react";
// import Homepage from "./pages/Homepage";

export default function Quiz() {
	let [questions, setQuestions] = useState([]);

	useEffect(() => {});

	const getQuestions = async function () {
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
}
