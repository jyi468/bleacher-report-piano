import React from 'react';
import './Logger.css';
import {useNoteContext} from '../../contexts/NoteContext';

const Logger = () => {
    const {notes} = useNoteContext();
    return (
        <div className="logger">
            {notes.map((note, i) => {
                return (
                    <h3 key={i} className="logger-item">{`${note}`}</h3>
                );
            })}
        </div>
    )
};

export default Logger;