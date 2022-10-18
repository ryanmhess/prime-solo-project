const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/start/:id', (req, res) => {
	console.log('In the PUT status router', req.params.id);
	const sqlText = `
		UPDATE "quest"
			SET "start" = CURRENT_TIME
			WHERE "id" = $1;
	`;
    const sqlValues = [req.params.id];
	pool.query(sqlText, sqlValues)
		.then((putStartRes) => {
			res.sendStatus(201)
		})
		.catch((putStartErr) => {
			console.log('Failed to put quest', putStartErr);
			res.sendStatus(500);
		});
});

router.put('/finish/:id', (req, res) => {
	console.log('In the PUT status router', req.params.id);
	const sqlText = `
		UPDATE "quest"
			SET "finish" = CURRENT_TIME
			WHERE "id" = $1;
	`;
    const sqlValues = [req.params.id];
	pool.query(sqlText, sqlValues)
		.then((putFinishRes) => {
			res.sendStatus(201)
		})
		.catch((putFinishErr) => {
			console.log('Failed to put quest', putFinishErr);
			res.sendStatus(500);
		});
});

router.put('/reset/:id', (req, res) => {
	console.log('In the PUT status router', req.params.id);
	const sqlText = `
		UPDATE "quest"
			SET "start" = NULL
			WHERE "id" = $1;
	`;
    const sqlValues = [req.params.id];
	pool.query(sqlText, sqlValues)
		.then((putResetRes) => {
			res.sendStatus(201)
		})
		.catch((putResetErr) => {
			console.log('Failed to put quest', putResetErr);
			res.sendStatus(500);
		});
});

module.exports = router;