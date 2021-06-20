const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// gets movies for movie reducer
router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

// gets selected movie when flipping to details page for data persistance
router.get('/select/:id', (req, res) => {
  console.log('got to select');
  

  const query = `SELECT * FROM movies WHERE "movies".id = $1`;
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Select movie', err);
      res.sendStatus(500)
    })

});

// adds a new movie, first returns the ID of said movie to use in second query
router.post('/', (req, res) => {
  console.log(req.body);
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // Adds movie
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // insert a reference in junction table for movie inserted above
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // second query for genre reference
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;