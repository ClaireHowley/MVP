import React from "react";
import { Link } from "react-router-dom";

export default function ReviewPage() {
	return (
		<div>
			<button type="button" class="btn btn-primary">
				<Link to="/">Homepage</Link>
			</button>
			<button type="button" class="btn btn-primary">
				<Link to="/quiz">Start</Link>
			</button>
		</div>
	);
}
