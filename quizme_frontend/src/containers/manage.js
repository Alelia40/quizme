import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import './manage.css';

import { addQuestion as addQ, setQuestions as setQ, resetQuestions as resetQ } from '../actions/questionActions';

const axios = require('axios');

function Manage(props) {

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get('/quizzes/')
            .then(res => {
                setQuizzes(res.data.data);
                console.log(res.data.data);
            })
            .catch(err => console.log(err));
    }, []);

    function renderQuizzes(quizArray) {
        return quizArray.map(renderQuizCard);
    }

    function renderQuizCard(quiz) {
        return (
            <div className="quiz-item">
                <h4>Quiz: {quiz.name}</h4>
                <span>
                    <button className="btn-quizme-main">Select</button>
                </span>
            </div>
        );
    }

    return (
        <div className="manage-content">
            <h1>Manage Quizzes Page</h1>
            <div id="quiz-select-box">
                {renderQuizzes(quizzes)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionReducer.questions,
        numQuestions: state.questionReducer.numQuestions
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (question, answer) => {
            dispatch(addQ(question, answer));
        },
        setQUestions: (questions) => {
            dispatch(setQ(questions));
        },
        resetQuestions: () => {
            dispatch(resetQ());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Manage);