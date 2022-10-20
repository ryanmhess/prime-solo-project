const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	GET Route for Child Accounts by Parent Id
router.get('/parent/:id', (req, res) => {
	// console.log('In the GET user/children router', req.params.id);
	const id = req.params.id;
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
		.then((childrenRes) => {
			// console.log('Res rows:', childrenRes.rows);
			res.send(childrenRes.rows);
		})
		.catch((err) => {
			console.log('Failed to pull Children', err);
			res.sendStatus(500);
		});
});

//	GET Route for Child Account
router.get('/child/:id', (req, res) => {
	// console.log('In the GET user/children router', req.params.id);
	const id = req.params.id;
	const queryText = `
		SELECT "user".id, "quest".id AS quest_id, "category".child_text, "quest".start, "quest".finish FROM "quest"
			LEFT JOIN "category"
				ON "quest".category_id = "category".id
			LEFT JOIN "user"
				ON "quest".child_id = "user".id
			WHERE "user".id = $1
      ORDER BY "quest".finish ASC NULLS LAST, "quest".start ASC NULLS LAST;
  `;
	pool.query(queryText, [id])
		.then((childRes) => {
			// console.log('Res rows:', childRes.rows);
			res.send(childRes.rows);
		})
		.catch((err) => {
			console.log('Failed to pull Child', err);
			res.sendStatus(500);
		});
});

module.exports = router;