var express = require("express"); // imports Express framework
var router = express.Router(); // creates router object with express
const db = require("../model/helper"); // import db functions

// fisher yates shuffle algorithm
function shuffle(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * i); // generates a number between 0 and 1 that isn't 1, therefore mulity by the i to get a number (math.floor rounds down to nearest whole number)
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	return arr;
}

router.get("/", async function (req, res) {
	try {
		const results = await db(
			// db helper function, imported at the top
			`SELECT * FROM questions JOIN multipleChoiceAnswers ON multipleChoiceAnswers.question_id = questions.question_id;`
		);
		console.log("getting qs");
		const result = {}; // used to store the grouped data
		// group things... by question_id
		results.data.forEach((item) => {
			// data (array )is a property in the results object
			// console.log(item);
			if (result[item.question_id]) {
				// checks if the result object already has an entry for the current item's question id
				// it already exists in the object
				result[item.question_id].answers.push({
					answer_id: item.answer_id,
					answer_text: item.answer_text,
					is_correct: item.is_correct,
				});
			} else {
				// it doesnt exist yet, create the object result
				result[item.question_id] = {
					question_id: item.question_id,
					question: item.questions,
					answers: [
						{
							answer_id: item.answer_id,
							answer_text: item.answer_text,
							is_correct: item.is_correct,
						},
					],
				};
			}
		});

		let resultArray = Object.values(result); // object.values takes the values of results and puts them into an array
		let randomResultArr = shuffle(resultArray);
		res.send(randomResultArr);
	} catch (err) {
		res.status(500).send(err); // status 500 error - server encountered an issue in fulfilling the request
	}
});

// add route to push new questions into the db
router.post("/addquestion", async function (req, res) {
	try {
		const { question, answers } = req.body; // getting the question and answers from the req.body

		const questionAdded = await db(
			`INSERT INTO questions (questions) VALUES ("${question}")`
		);

		const questionIdObject = await db(`SELECT LAST_INSERT_ID()`); // came as [oBJECT [OBJECT]...
		// const questionId = questionIdObject[0];
		console.log("this is", questionIdObject);

		for (const answer of answers) {
			// have to loop as ans is an arr
			const isCorrect = answer.isCorrect ? 1 : 0; // stopped issue of passing undefined
			await db(
				`INSERT INTO multipleChoiceAnswers (answer_text, is_correct, question_id,) VALUES ("${answer.text}", "${isCorrect}", "${questionIdObject}")`
			);
		}
		res
			.status(200)
			.send({ message: "Question and answers added successfully" });
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

module.exports = router;
