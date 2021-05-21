const mouseReducer = (state={}, action) => {
    switch (action.type) {
        case 'SET_MOUSE_DOWN':
            return {isMouseDown: action.payload};
        default:
            return state;
    }
};

export default mouseReducer;