const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//	GET Route for details
  router.get('/:id', (req, res) => {
    console.log('In the GET details router', req.params.id);
    const id = req.params.id;
    const queryText = `
    SELECT "category".parent_text, "category".child_text, "quest".description, "quest".start, "quest".finish, "quest".score FROM "quest"
      LEFT JOIN "category"
        ON "quest".category_id = "category".id
      WHERE "quest".id = $1;
  
    `;
    pool.query(queryText, [id])
      .then((detailsRes) => {
        console.log('Res rows:', detailsRes.rows);
        res.send(detailsRes.rows);
      })
      .catch((err) => {
        console.log('Failed to pull Children', err);
        res.sendStatus(500);
      });
  });

router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;