import React, { useState } from 'react';
import { connect } from 'react-redux';

import './quiz.css';

import { addQuestion as addQ, setQuestions as setQ, resetQuestions as resetQ } from '../actions/questionActions';

function Manage(props) {

    return (
        <div className="manage-content">
            <h1>Manage Questions</h1>
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