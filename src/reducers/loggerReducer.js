import {splitNoteOctave} from '../utils/noteUtils';

const loggerReducer = (state={}, action) => {
    if (!action.payload) {
        return state;
    }
    const {pianoId, note} = action.payload;
    switch (action.type) {
        case 'PRESS_KEY':
            const newLogs = [...state[pianoId], `${splitNoteOctave(note)[0]}`];
            return {...state, [pianoId]: newLogs};
        case 'INITIALIZE_LOGGER':
            return {...state, [pianoId]: []};
        default:
            return state;
    }
};

export default loggerReducer;