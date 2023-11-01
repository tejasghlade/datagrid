const express = require('express');
const moviesRouter = require('./routes/movies/movies.router');
const app = express();

app.use(express.json())

app.use('/movies',moviesRouter);

app.use('/',(req, res) => {
    res.send({
        'Application' : true
    })
})

module.exports = app;