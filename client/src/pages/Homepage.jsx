import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div>
			<div>
				<div className="container lg"></div>

				<button type="button" className="buttonHomepage">
					<Link to="/quiz">Start</Link>
				</button>
			</div>
			<button type="button" className="buttonHomepage">
				<Link to="/review">Review</Link>
			</button>
		</div>
	);
}
