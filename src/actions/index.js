export const pressKey = (note, pianoId) => {
    return {
        type: 'PRESS_KEY',
        payload: {
            pianoId,
            note
        }
    };
};

export const releaseKey = (note, pianoId) => {
    return {
        type: 'RELEASE_KEY',
        payload: {
            pianoId,
            note
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

export const setIsMouseDown = (isMouseDown) => {
    return {
        type: 'SET_MOUSE_DOWN',
        payload: isMouseDown
    }
};