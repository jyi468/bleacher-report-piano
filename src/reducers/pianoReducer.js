const pianoReducer = (state={}, action) => {
    switch (action.type) {
        case 'PRESS_KEY':
            return {...state, [action.payload]: {isInverted: true}};
        case 'RELEASE_KEY':
            return {...state, [action.payload]: {isInverted: false}};
        default:
            return state;
    }
};

export default pianoReducer;