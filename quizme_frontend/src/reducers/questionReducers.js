
function questionReducer(state = { questions: [], numQuestions: 0 }, action) {
    switch (action.type) {
        case "ADD_QUESTION":
            state = {
                ...state,
                questions: [...state.questions, action.payload],
                numQuestions: state.numQuestions + 1
            }
            break;
        case "SET_QUESTIONS":
            state = {
                ...state,
                questions: action.payload,
                numQuestions: action.payload.length
            }
            break;
        case "RESET":
            state = {
                ...state,
                questions: [],
                numQuestions: 0
            }
    }
    return state;
}

export default questionReducer;