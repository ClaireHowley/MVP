var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", async function (req, res) {
	try {
		const results = await db(
			`SELECT * FROM questions JOIN multipleChoiceAnswers ON multipleChoiceAnswers.question_id = questions.question_id;`
		);
		const result = {};
		// group things... by question_id
		results.data.forEach((item) => {
			console.log(item);
			if (result[item.question_id]) {
				// it already exists
				result[item.question_id].answers.push({
					answer_id: item.answer_id,
					answer_text: item.answer_text,
				});
			} else {
				// it doesnt exist yet
				result[item.question_id] = {
					question_id: item.question_id,
					question: item.questions,
					answers: [
						{ answer_id: item.answer_id, answer_text: item.answer_text },
					],
				};
			}
		});

		res.send(Object.values(result));
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
