const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  query = 'SELECT * FROM "genres";';
  pool.query(query)
  .then ( result => {
    res.send(result.rows)
  })
  .catch(error => {
    console.log('error in query', error);
    res.sendStatus(500)
  })
  
});

router.get('/select/:id', (req, res) => {
  // gets genres for specific movie, linked to details dispatch
  query = `SELECT "genres".name FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
  JOIN "genres" ON "movies_genres".genre_id = "genres".id 
  WHERE "movies".id = $1;`;
  pool.query(query, [req.params.id])
  .then ( result => {
    res.send(result.rows)
  })
  .catch(error => {
    console.log('error in query', error);
    res.sendStatus(500)
  })
  
});

module.exports = router;