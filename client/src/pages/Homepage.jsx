import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div className="homepage">
			<div>
				<button type="button" className="homepageQuizButton">
					<Link to="/quiz">Start</Link>
				</button>
			</div>
			<button type="button" className="homepageReviewButton">
				<Link to="/review">Review</Link>
			</button>
		</div>
	);
}
