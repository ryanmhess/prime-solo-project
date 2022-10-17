const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	GET Route for details
  router.get('/:id', (req, res) => {
    // console.log('In the GET details router', req.params.id);
    const id = req.params.id;
    const sqlText = `
    SELECT "quest".id, "user".username, "category".id AS category_id, "category".parent_text, "category".child_text, "quest".description, "quest".start, "quest".finish, "quest".score FROM "quest"
      LEFT JOIN "category"
        ON "quest".category_id = "category".id
      LEFT JOIN "user"
        ON "quest".child_id = "user".id
      WHERE "quest".id = $1;
    `;
    pool.query(sqlText, [id])
      .then((detailsRes) => {
        // console.log('Res rows:', detailsRes.rows);
        res.send(detailsRes.rows);
      })
      .catch((err) => {
        console.log('Failed to pull Children', err);
        res.sendStatus(500);
      });
  });

router.put('/:id', (req, res) => {
  const sqlText = `
    UPDATE "quest"
      SET
        "category_id" = $1,
        "description" = $2,
        "score" = $3 
      WHERE 
        "id" = $4
  `;
  const sqlValues = [req.body.category_id, req.body.description, req.body.score];
  pool.query(sqlText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.lot('Error making database edits:', error);
      res.sendStatus(500);
    })
})

module.exports = router;