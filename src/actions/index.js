export const pressKey = (note, octave) => {
    /*dispatch({
        type: 'PRESS_KEY',
        payload: `${note}${octave}`
    });
    addLoggerNote(note);*/
    return {
        type: 'PRESS_KEY',
        payload: `${note}${octave}`
    };
};

export const releaseKey = (note, octave) => {
    return {
        type: 'RELEASE_KEY',
        payload: `${note}${octave}`
    }
};