const pianoReducer = (state={}, action) => {
    if (!action.payload) {
        return state;
    }
    const {pianoId, note} = action.payload;
    switch (action.type) {
        case 'PRESS_KEY':
            return {
                ...state,
                [pianoId]: {
                    ...state[pianoId],
                    [note]: {isInverted: true}
                }
            };
        case 'RELEASE_KEY':
            return {
                ...state,
                [pianoId]: {
                    ...state[pianoId],
                    [note]: {isInverted: false}
                }
            };
        case 'INITIALIZE_PIANO':
            return {...state, [pianoId]: {}};
        default:
            return state;
    }
};

export default pianoReducer;