import React from "react";

// refacturing code
// double map to loop through and make rows <tr> and then cells <td>

export default function Table({ headings, rows }) {
	return (
		<div className="table">
			<table border="5">
				<thead className="tableHeading">
					<tr>
						{/* one map as it is a 1 dimensional array */}
						{headings.map((heading, index) => (
							<th key={index}>{heading}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{/*this structure allows to iterate over the outer array to render each row, and within each row, iterate over the inner array to render each cell data*/}
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
