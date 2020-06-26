import React, { useState } from 'react';
import { connect } from 'react-redux';
import './content.css';

import { Modal, Form } from 'react-bootstrap';

import { addQuestion as addQ, resetQuestions as resetQ } from '../actions/questionActions';

function Content(props) {

    const [addShow, setAddShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [question, setQuestion] = useState({ q: "Give Me Some Questions To Ask You", a: "Use The Add Question Button" });

    const handleAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);

    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);


    function handleAddQuestion() {
        props.addQuestion(document.getElementById("questionContent").value, document.getElementById("answerContent").value);
        handleAddClose();
    }

    function handleDeleteQuestions(){
        props.resetQuestions();
        handleDeleteClose();
    }

    //display a random question on the question card
    function askQuestion() {
        if (props.questions.length !== 0) {
            let q1 = props.questions[Math.floor(Math.random() * (props.numQuestions))];
            setQuestion(q1);
        } else {
            setQuestion({ q: "Give Me Some Questions To Ask You", a: "Use The Add Question Button" });
        }
    }

    return (
        <div className="body">
            <div className="buttonContainer">
                <h2>Questions: {props.numQuestions}</h2>
                <button className="btn-quizme-add" onClick={() => handleAddShow()}>Add Question</button>
                {props.numQuestions !== 0 && <button className="btn-quizme-delete" onClick={() => handleDeleteShow()}>Delete Question(s)</button>}
            </div>
            <div id="quizBox">
                <div id="question">
                    <h4 id="query">{question.q}</h4>
                    <h4 id="answer">{question.a}</h4>
                    <p id="tutorial">Hold To See Solution</p>
                </div>
                <button className="btn-quizme-main" onClick={askQuestion}>Quiz Me!</button>
            </div>
            <Modal show = {addShow} handleClose={handleAddClose}>
                <Modal.Header>
                    <Modal.Title>Enter Question Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Question</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Question Here..." id="questionContent"></Form.Control>
                    <Form.Label>Answer</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Answer Here..." id="answerContent"></Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-quizme-add" onClick={() => handleAddQuestion()}>Submit Question</button>
                    <button className="btn-quizme-utility" onClick={() => handleAddClose()}>Cancel</button>
                </Modal.Footer>
            </Modal>

            <Modal show = {deleteShow} handleClose={handleDeleteClose}>
                <Modal.Header>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure You Want To Delete {props.numQuestions} questions?</Modal.Body>
                <Modal.Footer>
                    <button className="btn-quizme-add" onClick={() => handleDeleteQuestions()}>Yeah</button>
                    <button className="btn-quizme-utility" onClick={() => handleDeleteClose()}>No</button>
                </Modal.Footer>
            </Modal>
        </div >
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
        resetQuestions: () => {
            dispatch(resetQ());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);