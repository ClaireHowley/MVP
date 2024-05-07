import React from "react";
import { Link } from "react-router-dom";

export default function SubmitQuestion() {
	return (
		<div>
			{" "}
			<button type="button" className="reviewHomepageButton">
				<Link to="/">Homepage</Link>
			</button>
			<button type="button" className="reviewQuizButton">
				<Link to="/quiz">Quiz</Link>
			</button>
		</div>
	);
}
