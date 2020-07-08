const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();


const db = require('./db/database');
const quizRoutes = require('./routes/quizRoutes');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use('/quizzes', quizRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));