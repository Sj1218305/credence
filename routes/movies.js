const express = require('express');
const moviesController = require('../controllers/movies');

const router = express.Router();

router.get('/movies',moviesController.showMovies);

module.exports = router;