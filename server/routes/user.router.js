const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

//	Base GET Route		🟢🟢 Not being used atm 🟢🟢
router.get('/', rejectUnauthenticated, (req, res) => {
	console.log('In the GET user router:', req.body);
	// Send back user object from the session (previously queried from the database)
	res.send(req.user);
});

//	GET Route for Child Accounts by Parent Id
router.get('/:id', rejectUnauthenticated, (req, res) => {
	console.log('In the GET user/children router', req.params.id);
	const id = req.params.id;
	const queryText = `
		SELECT * FROM "user"
			WHERE "parent_id" = $1
	`;
	pool.query(queryText, [id])
		.then((childrenRes) => {
			console.log('Res rows:', childrenRes.rows);
			res.send(childrenRes.rows);
		})
		.catch((err) => {
			console.log('Failed to pull Children', err);
			res.sendStatus(500);
		});
});

//	POST route to register(add) adult account to db
//	Accessed on landing page and via register links		🟢🟢 Eventually link to login/register only on landing page 🟢🟢
router.post('/register', (req, res, next) => {
	const username = req.body.username;
	const password = encryptLib.encryptPassword(req.body.password);
	const code = Number(req.body.code);
	const queryText = `INSERT INTO "user" (username, password, code)
		VALUES ($1, $2, $3) RETURNING id`;
	pool
		.query(queryText, [username, password, code])
		.then(() => res.sendStatus(201))
		.catch((err) => {
		console.log('User registration failed: ', err);
		res.sendStatus(500);
    });
});

//	POST route to register(add) child account to db
//	Accessed on the parent account user page		🟢🟢 This should only live on the "family management page 🟢🟢
router.post('/register/:id', (req, res, next) => {
	const username = req.body.username;
	const password = encryptLib.encryptPassword(req.body.password);
	const parent_id = req.body.parent_id;
	const queryText = `INSERT INTO "user" (username, password, code, is_parent, parent_id)
		VALUES ($1, $2, 'NULL', 'FALSE', $3) RETURNING id`;
	pool
		.query(queryText, [username, password, parent_id])
		.then(() => res.sendStatus(201))
		.catch((err) => {
		console.log('User registration failed: ', err);
		res.sendStatus(500);
	});
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
	res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
	// Use passport's built-in method to log out the user
	req.logout();
	res.sendStatus(200);
});

//	DELETE route to remove child accounts from db		🟢🟢 This should only live on the "family management page 🟢🟢
router.delete('/:id', rejectUnauthenticated, (req, res) => {
	console.log('In the DELETE user/child router', req.params.id);
	const id = req.params.id;
	const queryText = `
		DELETE FROM "user"
			WHERE "id" = $1
	`;
	pool.query(queryText, [id])
		.then((removeRes) => {
			console.log('Res rows:', removeRes.rows);
			res.send(removeRes.rows);
		})
		.catch((err) => {
			console.log('Failed to remove Child', err);
			res.sendStatus(500);
		});
});

module.exports = router;
