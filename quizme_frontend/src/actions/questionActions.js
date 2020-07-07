export function addQuestion(question, answer) {
    return {
        type: "ADD_QUESTION",
        payload: {
            q: question,
            a: answer
        }
    }
}

export function setQuestions(questions) {
    return {
        type: "SET_QUESTIONS",
        payload: questions
    }
}

export function resetQuestions() {
    return {
        type: "RESET"
    }
}