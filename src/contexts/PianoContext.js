import React, {useContext, createContext, useReducer} from 'react';

/**
 * PianoContext keeps track of the state of the key presses (whether to invert the key colors)
 * {'C4': {invert: true}, 'D4': {invert: false}, ...}
 */
const PianoContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case 'PRESS_KEY':
            return {...state, [action.payload]: {invert: true}};
        case 'RELEASE_KEY':
            return {...state, [action.payload]: {invert: false}};
        default:
            return state;
    }
};

export const PianoProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {});
    return (
        <PianoContext.Provider value={[state, dispatch]}>
            {children}
        </PianoContext.Provider>
    )
};

export const usePianoContext = () => useContext(PianoContext);