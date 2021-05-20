import {splitNoteOctave} from '../utils/noteUtils';

const loggerReducer = (state=[], action) => {
    switch (action.type) {
        case 'PRESS_KEY':
            return [...state, `${splitNoteOctave(action.payload)[0]}`];
        default:
            return state;
    }
};

export default loggerReducer;