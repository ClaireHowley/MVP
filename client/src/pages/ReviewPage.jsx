import { Link } from "react-router-dom";
import React from "react";
import Table from "./Table";

export default function ReviewPage() {
	const tableData = {
		headings: ["Pronouns", "Group A", "Group B1", "Group B2"],
		rows: [
			["Εγώ", "λύν-ω", "αγαπ-ώ", "μπορ-ώ"],
			["Εσύ", "λύν-εις", "αγαπ-άς", "μπορ-είς"],
			["Αυτός/Αυτή/Αυτό", "λύν-ει", "αγαπ-ά(ει)", "μπορ-εί"],
			["Εμείς", "λύν-ουμε", "αγαπ-άμε/ούμε", "μπορ-ούμε"],
			["Εσείς", "λύν-ετε", "αγαπ-άτε", "μπορ-είτε"],
			["Αυτοί/Αυτές/Αυτά", "λύν-ουν(ε)", "αγαπ-ούν/άνε", "μπορ-ούν"],
		],
	};

	return (
		<div className="ReviewPage">
			<h2>Present Tense - Ενεστώτας</h2>
			<div className="groupAgroupB">
				<p>Group A: verbs ending in -ω</p>
				<p>Group B: verbs ending in -ώ</p>
			</div>

			<Table headings={tableData.headings} rows={tableData.rows} />

			{/* <div className="table">
				<table border="5">
					<thead>
						<tr className="tableHeading">
							<th>Pronouns</th>
							<th>Group A</th>
							<th>Group B1</th>
							<th>Group B2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Εγώ</td>
							<td>λύν-ω</td>
							<td>αγαπ-ώ</td>
							<td>μπορ-ώ</td>
						</tr>
						<tr>
							<td>Εσύ</td>
							<td>λύν-εις</td>
							<td>αγαπ-άς</td>
							<td>μπορ-είς</td>
						</tr>
						<tr>
							<td> Αυτός/Αυτή/Αυτό </td>
							<td>λύν-ει</td>
							<td>αγαπ-ά(ει)</td>
							<td>μπορ-εί</td>
						</tr>
						<tr>
							<td> Εμείς </td>
							<td>λύν-ουμε</td>
							<td>αγαπ-άμε/ούμε</td>
							<td>μπορ-ούμε</td>
						</tr>
						<tr>
							<td> Εσείς </td>
							<td>λύν-ετε</td>
							<td>αγαπ-άτε</td>
							<td>μπορ-είτε</td>
						</tr>
						<tr>
							<td> Αυτοί/Αυτές/Αυτά </td>
							<td>λύν-ουν(ε) </td>
							<td>αγαπ-ούν/άνε</td>
							<td>μπορ-ούν</td>
						</tr>
					</tbody>
				</table>
			</div> */}
			<div>
				<button type="button" className="reviewHomepageButton">
					<Link to="/">Homepage</Link>
				</button>

				<button type="button" className="reviewQuizButton">
					<Link to="/quiz">Quiz</Link>
				</button>
			</div>
			<button type="button">
				<Link to="/submit">Submit</Link>
			</button>
		</div>
	);
}
