const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;
const MONGO_URL =
    "mongodb+srv://tejaslade:$tejaslade$@cluster0.bonpjls.mongodb.net/?retryWrites=true&w=majority";



const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB is Connection ready');
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})

async function startServer() {
    await mongoose.connect(MONGO_URL);
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })

}


startServer();