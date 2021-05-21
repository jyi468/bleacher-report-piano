export const pressKey = (note, octave, pianoId) => {
    return {
        type: 'PRESS_KEY',
        payload: {
            pianoId,
            note: `${note}${octave}`
        }
    };
};

export const releaseKey = (note, octave, pianoId) => {
    return {
        type: 'RELEASE_KEY',
        payload: {
            pianoId,
            note: `${note}${octave}`
        }
    }
};

export const initializeLogger = (pianoId) => {
    return {
        type: 'INITIALIZE_LOGGER',
        payload: {
            pianoId
        }
    }
};

export const initializePiano = (pianoId) => {
    return {
        type: 'INITIALIZE_PIANO',
        payload: {
            pianoId
        }
    }
};

export const clearLogger = (pianoId) => {
    return {
        type: 'CLEAR_LOGGER',
        payload: {
            pianoId
        }
    }
};