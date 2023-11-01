
const { getAllMovies, addNewMovie,existMovieWithId ,deleteMovie, getMovieById } = require("../../models/movies.model");


function httpGetAllMovies(req,res) {
    return res.status(200).json(getAllMovies());
 }

function httpAddNewMovie(req,res) {
    const movie = req.body;

    if (!movie.Title) {
        return res.status(400).json({
            error : 'Missing required movie property'
        })
    }

    const newMovie =  addNewMovie(movie);
    return res.status(201).json(newMovie);
 }

function httpGetMovieById(req,res) { 
    const movieId = req.params.id;
    if (!existMovieWithId(movieId)) {
        return  res.status(404).json({
            error : "Movie not found"
        })

    }

    const movie = getMovieById(movieId)
    return res.status(200).json(movie);
}

function httpDeleteMovie(req,res) {
    const movieId = req.params.id;
    if (!existMovieWithId(movieId)) {
        return  res.status(404).json({
            error : "Movie not found"
        })
    }

    const deletedMovie = deleteMovie(movieId)
    return res.status(200).json(deletedMovie);
}

module.exports = {
    httpAddNewMovie,
    httpDeleteMovie,
    httpGetAllMovies,
    httpGetMovieById
}