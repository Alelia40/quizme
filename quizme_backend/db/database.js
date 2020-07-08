const mongoose = require('mongoose')

const MONGO_CONNECTION = process.env.MONGO_CONNECTION; //define mongo connection string in .env file

mongoose
    .connect(MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db;