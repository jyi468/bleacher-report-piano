import './Piano.css';
import React, {useEffect, useState} from 'react';
import {hasAccidental} from '../../utils/noteUtils';
import {useLoggerContext} from '../../contexts/LoggerContext';
import {usePianoContext} from "../../contexts/PianoContext";

const Key = ({note, octave}) => {
    const color = hasAccidental(note) ? 'black' : 'white';
    const {addLoggerNote} = useLoggerContext();
    const [state, dispatch] = usePianoContext();
    const noteOctave = `${note}${octave}`;

    useEffect(() => {
        const timerId = setTimeout(() => {
            dispatch({
                type: 'RELEASE_KEY',
                payload: noteOctave
            });
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [state[noteOctave]]);

    const handleOnClick = () => {
        dispatch({
            type: 'PRESS_KEY',
            payload: noteOctave
        });
        addLoggerNote(note);
    };

    const renderClasses = () => {
        return `key ${color} ${note} ${octave} ${state[noteOctave] && state[noteOctave].invert ? 'invert' : ''}`
    };

    return (
        <div onClick={handleOnClick} className={renderClasses()}>
            <h3 className="note">{note}</h3>
        </div>
    );

};

export default Key;