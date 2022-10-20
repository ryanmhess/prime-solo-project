const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
	console.log('In the GET quests router', req.params);
	const id = Number(req.params.id);
	const queryText = `
    SELECT "user".id, "quest".id AS quest_id, "category".parent_text, "quest".start, "quest".finish FROM "quest"
      LEFT JOIN "category"
        ON "quest".category_id = "category".id
      LEFT JOIN "user"
        ON "quest".child_id = "user".id
      WHERE "user".id = $1
      ORDER BY "quest".finish ASC NULLS LAST, "quest".start ASC NULLS LAST
	`;
	pool.query(queryText, [id])
		.then((questsRes) => {
			// console.log('Res rows:', questsRes.rows);
			res.send(questsRes.rows);
		})
		.catch((err) => {
			console.log('Failed to pull Quests', err);
			res.sendStatus(500);
		});
});

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