import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Homepage() {
	return (
		<div>
			<div>
				<button type="button" className="startButtonHomepage">
					<Link to="/quiz">Start</Link>
				</button>
			</div>
			<button type="button" className="btn btn-primary">
				<Link to="/review">Review</Link>
			</button>
		</div>
	);
}
