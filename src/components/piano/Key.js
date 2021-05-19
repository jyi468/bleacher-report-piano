import './Piano.css';
import React, {useEffect, useState} from 'react';
import {hasAccidental} from '../../utils/noteUtils';
import {useNoteContext} from '../../contexts/NoteContext';

const Key = ({note, octave}) => {
    const color = hasAccidental(note) ? 'black' : 'white';
    const [invert, setInvert] = useState(false);
    const {notes, setNotes, limit} = useNoteContext();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setInvert(false);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [invert]);

    useEffect(() => {

    }, [limit]);

    const handleOnClick = () => {
        setInvert(true);
        let newNotes = [`${note}`, ...notes];
        if (limit && newNotes.length === limit) {
            newNotes.pop();
        }
        setNotes(newNotes);
    };

    const renderClasses = () => {
        return `key ${color} ${note} ${octave} ${invert ? 'invert' : ''}`
    };

    return (
        <div onClick={handleOnClick} className={renderClasses()}>
            <h3 className="note">{note}</h3>
        </div>
    );

};

export default Key;