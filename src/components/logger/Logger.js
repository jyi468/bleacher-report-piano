import React from 'react';
import './Logger.css';
import {useLoggerContext} from '../../contexts/LoggerContext';

const Logger = () => {
    const {notes} = useLoggerContext();
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