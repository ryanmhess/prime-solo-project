const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	GET Route for Child Accounts by Parent Id
// router.get('/parent/details/:id', rejectUnauthenticated, (req, res) => {
router.post('/', (req, res) => {
	console.log('In the POST quest router', req.body);
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

router.delete('/:id', (req, res) => {
	console.log('In the DELETE quest router', req.params.id);
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

module.exports = router;