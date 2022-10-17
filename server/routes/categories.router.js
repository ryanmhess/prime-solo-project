const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	GET Route for Child Accounts by Parent Id
router.get('/', (req, res) => {
	// console.log('In the GET categories router');
	const queryText = `
		SELECT * FROM "category"
			ORDER BY "parent_text"
	`;
	pool.query(queryText)
		.then((catRes) => {
			// console.log('Res rows:', catRes.rows);
			res.send(catRes.rows);
		})
		.catch((err) => {
			console.log('Failed to pull categories', err);
			res.sendStatus(500);
		});
});

module.exports = router;