const express = require('express');

const router = express.Router();

const Quiz = require('../models/quiz');

router.get('/', (req, res) => {
    Quiz.find()
        .then(quizzes => {
            if (quizzes) {
                res.status(200).json({ success: true, data: quizzes });
            } else {
                res.status(404).json({ success: false, error: "Quizzes not found" });
            }
        })
        .catch(err => res.status(500).json({ success: false, error: err.toString() }));
});

router.get('/:name', (req, res) => {
    Quiz.findOne({ name: req.params.name })
        .then(quiz => {
            if (quiz) {
                res.status(200).json({ success: true, data: quiz });
            } else {
                res.status(404).json({ success: false, error: "Quiz not found" });
            }
        })
        .catch(err => res.status(500).json({ success: false, error: err.toString() }));
});

router.post('/add', (req, res) => {

    const { name, questions } = req.body

    const quizToAdd = new Quiz();

    quizToAdd.name = name;
    quizToAdd.questions = questions;

    quizToAdd.save()
        .then(newPost => {
            res.status(200).json({ success: true, data: newPost });
        })
        .catch(err => {
            res.status(500).json({ success: false, error: err.toString() });
        })
});

router.delete('/delete/:name', (req, res) => {
    Quiz.deleteOne({ name: req.params.name })
        .then(data => {
            if (data.deletedCount == 0) {
                res.status(404).json({ success: false, error: "Quiz Does Not Exist" });
            } else {
                res.status(200).json({ success: true, data: data });
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, error: err.toString() });
        })
});

module.exports = router;