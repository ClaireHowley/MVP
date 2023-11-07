var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send({ title: "Express" });
});

/*GET question list */
router.get("/questions", async function (req, res) {
	try {
		const results = await db("SELECT * FROM questions;");
		res.send(results.data);
	} catch (err) {
		res.status(500).send(err);
	}
});

// GET one question //
router.get("/questions/:id", async function (req, red) {
	const question_id = req.params.id;
	try {
		const results = await db(
			`SELECT * FROM questions WHERE question_id = ${id};`
		);
		res.send(results.data[0]);
	} catch (err) {
		res.status(500).send(err);
	}
});

//GET ONE answer //
router.get("/answers/:id", async function (req, red) {
	const answer_id = req.params.id;
	try {
		const results = await db(`SELECT * FROM answers WHERE answer_id = ${id};`);
		res.send(results.data[0]);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
