const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	Route used to add a new quest
router.post('/', (req, res) => {
	// console.log('In the POST quest router', req.body);
    const child_id = Number(req.body.child_id);
    const category_id = Number(req.body.category_id);
    const description = req.body.description;
	const sqlText = `
        INSERT INTO "quest"
            (child_id, category_id, description)
        VALUES
            ($1, $2, $3);
	`;
    const sqlValues = [child_id, category_id, description];
	pool.query(sqlText, sqlValues)
		.then((postRes) => {
			res.sendStatus(201)
		})
		.catch((postErr) => {
			console.log('Failed to post quest', postErr);
			res.sendStatus(500);
		});
});

//	Route used to delete a quest
router.delete('/:id', (req, res) => {
	// console.log('In the DELETE quest router', req.params.id);
	const sqlText = `
		DELETE FROM "quest" 
			WHERE id = $1;
	`;
    const sqlValues = [req.params.id];
	pool.query(sqlText, sqlValues)
		.then((postRes) => {
			res.sendStatus(201)
		})
		.catch((postErr) => {
			console.log('Failed to post quest', postErr);
			res.sendStatus(500);
		});
});

router.put('/:id', (req, res) => {
	console.log('In the POST quest router', req.body);
    const category_id = Number(req.body.category_id);
    const description = req.body.description;
	const sqlText = `
		UPDATE "quest"
			SET "category_id" = $2, "description" = $3
			WHERE "id" = $1;
	`;
    const sqlValues = [req.params.id, category_id, description];
	pool.query(sqlText, sqlValues)
		.then((postRes) => {
			res.sendStatus(201)
		})
		.catch((postErr) => {
			console.log('Failed to post quest', postErr);
			res.sendStatus(500);
		});
});

module.exports = router;