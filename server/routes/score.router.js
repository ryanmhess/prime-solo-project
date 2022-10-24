const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	GET Route for score
router.get('/:id', (req, res) => {
  console.log('In the GET score router', req.params.id);
  const id = req.params.id;
  const sqlText = `
    SELECT "user".total_score FROM "user"
      WHERE id = $1;
    `;
  pool.query(sqlText, [id])
    .then((scoreRes) => {
      // console.log('Res rows:', scoreRes.rows);
      res.send(scoreRes.rows);
    })
    .catch((err) => {
      console.log('Failed to pull Children', err);
      res.sendStatus(500);
  });
});

//	GET Route for high score
router.get('/high/:id', (req, res) => {
  console.log('In the GET high score router', req.params.id);
  const id = req.params.id;
  const sqlText = `
    SELECT MAX("user".total_score) FROM "user"
      WHERE parent_id = (SELECT parent_id FROM "user" WHERE id = $1);
    `;
  pool.query(sqlText, [id])
    .then((highScoresRes) => {
      // console.log('Res rows:', highScoresRes.rows);
      res.send(highScoresRes.rows);
    })
    .catch((err) => {
      console.log('Failed to pull Children', err);
      res.sendStatus(500);
  });
});

module.exports = router;