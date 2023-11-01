
const { getAllMovies, addNewMovie,existMovieWithId ,deleteMovie, getMovieById } = require("../../models/movies.model");


 async function httpGetAllMovies(req,res) {
    return res.status(200).json( await getAllMovies());
 }

async function httpAddNewMovie(req,res) {
    const movie = req.body;

    if (!movie.Title) {
        return res.status(400).json({
            error : 'Missing required movie property'
        })
    }

    await addNewMovie(movie);
    return res.status(201).json(movie);
 }

async function httpGetMovieById(req,res) { 
    const movieId = req.params.id;
    if (!existMovieWithId(movieId)) {
        return  res.status(404).json({
            error : "Movie not found"
        })

    }

    const movie = await getMovieById(movieId)
    return res.status(200).json(movie);
}

async function httpDeleteMovie(req,res) {
    const movieId = req.params.id;
    if (!existMovieWithId(movieId)) {
        return  res.status(404).json({
            error : "Movie not found"
        })
    }

    await deleteMovie(movieId)
    return res.status(200).json({
        ok: true,
      });
}

module.exports = {
    httpAddNewMovie,
    httpDeleteMovie,
    httpGetAllMovies,
    httpGetMovieById
}