const loggerReducer = (state={}, action) => {
    if (!action.payload) {
        return state;
    }
    const {pianoId, note} = action.payload;
    switch (action.type) {
        case 'PRESS_KEY':
            const newLogs = [...state[pianoId], note];
            return {...state, [pianoId]: newLogs};
        case 'CLEAR_LOGGER':
        case 'INITIALIZE_LOGGER':
            return {...state, [pianoId]: []};
        default:
            return state;
    }
};

export default loggerReducer;