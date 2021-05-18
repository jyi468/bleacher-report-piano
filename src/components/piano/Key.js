import './Piano.css';
import React, {useEffect, useState} from 'react';
import {hasAccidental} from '../../utils/noteUtils';

const Key = ({note, octave}) => {
    const color = hasAccidental(note) ? 'black' : 'white';
    const [invert, setInvert] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setInvert(false);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [invert]);

    const handleOnClick = () => {
        setInvert(true);
        // Log using context
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