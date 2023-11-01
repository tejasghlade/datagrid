const express = require('express');

const { httpAddNewMovie, httpDeleteMovie, httpGetAllMovies, httpGetMovieById } = require('./movies.controller')

const moviesRouter = express.Router();

moviesRouter.get('/', httpGetAllMovies);
moviesRouter.get('/:id', httpGetMovieById);
moviesRouter.post('/', httpAddNewMovie);
moviesRouter.delete('/:id', httpDeleteMovie);

module.exports = moviesRouter;