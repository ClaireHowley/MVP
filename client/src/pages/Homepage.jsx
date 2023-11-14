import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div id="homepage">
			<div id="homepageQuizButton">
				<button type="button">
					<Link to="/quiz">Start</Link>
				</button>
			</div>
			<div id="homepageReviewButton">
				<button type="button">
					<Link to="/review">Review</Link>
				</button>
			</div>
		</div>
	);
}
