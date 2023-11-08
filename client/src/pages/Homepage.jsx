import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div>
			<div>
				<button>
					<Link to="/quiz">Start</Link>
				</button>
			</div>
			<button>Review</button>
		</div>
	);
}
