export function addQuestion(question, answer) {
    return {
        type: "ADD_QUESTION",
        payload: {
            q: question,
            a: answer
        }
    }
}

export function resetQuestions(){
    return {
        type: "RESET"
    }
}