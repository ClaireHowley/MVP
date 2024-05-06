import React from "react";

// refacturing code
// double map to loop through and make rows <tr> and then cells <td>

export default function Table({ headings, rows }) {
	return (
		<div className="table">
			<table border="5">
				<thead className="tableHeading">
					<tr>
						{headings.map((heading, index) => (
							<th key={index}>{heading}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<td key={cellIndex}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
