var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", async function (req, res) {
	try {
		const results = await db(
			`SELECT * FROM questions JOIN multipleChoiceAnswers ON multipleChoiceAnswers.question_id = questions.question_id;`
		);
		let questionsWithAnswers = makeQuestionsWithAnswers(results);
		res.send(questionsWithAnswers);
	} catch (err) {
		res.status(500).send(err);
	}
});

function makeQuestionsWithAnswers(results) {
	let multipleChoiceAnswers = results.data.map((row) => ({
		id: row.answer_id,
		answers: row.answer_text,
	}));

	let row0 = results.data[0];
	let questionsWithAnswers = {
		id: row0.question_id,
		question: row0.question_text,
		multipleChoiceAnswers,
	};
	return questionsWithAnswers;
}

module.exports = router;
