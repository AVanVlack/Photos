const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const userRouter = require('./routes/users')
const gifRouter = require('./routes/gifs')

const app = express()
const dbUri = process.env.DB_URI
const port = process.env.PORT || 5000

// Database Setup
mongoose.connect(dbUri, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
 });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Connected to MongoDB Database");
});

app.use(express.json())
app.use(cors())
app.use(morgan('dev')) // TODO: set logging mode with env

app.use('/users', userRouter)
app.use('/gifs', gifRouter)

// Start Server
app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`)
})