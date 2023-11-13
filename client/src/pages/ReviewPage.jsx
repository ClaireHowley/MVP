import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function ReviewPage() {
	return (
		<div>
			<h3>Present Tense - Ενεστώτας</h3>
			<p>Group A: verbs ending in -ω</p>
			<p>Group B: verbs ending in -ώ</p>
			<table border="5" className="table">
				<thead>
					<tr>
						<th>Pronouns</th>
						<th>Group A</th>
						<th>Group B1</th>
						<th>Group B2</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Εγώ</th>
						<td>λύν-ω</td>
						<td>αγαπ-ώ</td>
						<td>μπορ-ώ</td>
					</tr>
					<tr>
						<th>Εσύ</th>
						<td>λύν-εις</td>
						<td>αγαπ-άς</td>
						<td>μπορ-είς</td>
					</tr>
					<tr>
						<th> Αυτός/Αυτή/Αυτό </th>
						<td>λύν-ει</td>
						<td>αγαπ-ά(ει)</td>
						<td>μπορ-εί</td>
					</tr>
					<tr>
						<th> Εμείς </th>
						<td>λύν-ουμε</td>
						<td>αγαπ-άμε/ούμε</td>
						<td>μπορ-ούμε</td>
					</tr>
					<tr>
						<th> Εσείς </th>
						<td>λύν-ετε</td>
						<td>αγαπ-άτε</td>
						<td>μπορ-είτε</td>
					</tr>
					<tr>
						<th> Αυτοί/Αυτές/Αυτά </th>
						<td>λύν-ουν(ε) </td>
						<td>αγαπ-ούν/άνε</td>
						<td>μπορ-ούν</td>
					</tr>
				</tbody>
			</table>
			<footer>
				<button type="button" className="homepageButtonReviewPage">
					<Link to="/">Homepage</Link>
				</button>

				<button type="button" className="quizButtonReviewPage">
					<Link to="/quiz">Quiz</Link>
				</button>
			</footer>
		</div>
	);
}
