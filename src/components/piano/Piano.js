import React, {useState, useEffect, useRef} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Key from './Key';
import {notesToNums, numsToNotes} from '../../constants/notes';
import {splitNoteOctave} from '../../utils/noteUtils';
import {pressKey, initializePiano} from "../../actions";
import {required, pattern} from '../../utils/validators';

const Piano = ({id, start, end, pressKey}) => {
    const [startNote, startOctave] = splitNoteOctave(start);
    const [endNote, endOctave] = splitNoteOctave(end);
    const [songNotes, setSongNotes] = useState([]);
    const [errors, setErrors] = useState({});
    const inputRef = useRef();

    useEffect(() => {
        initializePiano(id);
    }, []);

    /**
     * We render each Key based on the start and end inputs for the Piano using base 12.
     * This allows us to get a Piano of arbitrary size with the start and end Notes.
     * This also allows us to add functionality such as playing sound with the correct octave.
     * @returns {Array}
     */
    const renderKeys = () => {
        let keys = [];
        for (let i = startOctave * 12 + notesToNums[startNote]; i <= endOctave * 12 + notesToNums[endNote]; i++) {
            const note = numsToNotes[i % 12];
            const octave = Math.floor(i / 12);
            keys.push(<Key key={i} note={note} octave={octave} pianoId={id}/>)
        }
        return keys;
    };

    const onNotesChange = (e) => {
        if (e.target.value) {
            setSongNotes(e.target.value.toUpperCase().split(','));
        } else {
            setSongNotes([]);
        }
    };

    const csvValidator = pattern(/^[A-G][#]?(,[A-G][#]?)*$/, 'You need to enter comma-separated values.');

    const handleValidation = () => {
        let newErrors = {};
        const input = inputRef.current.value;

        const requiredError = required(input);
        if (requiredError) {
            newErrors.required = requiredError;
        }

        const csvError = csvValidator(input);
        if (csvError) {
            newErrors.csv = csvError;
        }

        setErrors(newErrors);
        return newErrors;
    };

    const showError = () => {
        if (!_.isEmpty(errors)) {
            return errors[Object.keys(errors)[0]];
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        const newErrors = handleValidation();
        if (_.isEmpty(newErrors)) {
            playNotes([...songNotes]);
            inputRef.current.value = "";
            setSongNotes([]);
        }
    };

    const playNotes = (notesToPlay) => {
        if (notesToPlay && notesToPlay.length) {
            const [noteToPlay, ...rest] = notesToPlay;
            if (!noteToPlay) {
                return;
            }
            pressKey(noteToPlay, 4, id);
            setTimeout(() => playNotes(rest), 1000);
        }
    };

    return (
        <>
            <div className="piano">
                {renderKeys()}
            </div>
            <div className="player">
                <input ref={inputRef} value={songNotes} onChange={onNotesChange}/>
                <a onClick={handleClick}>Play</a>
            </div>
            <div className="error">
                <span>{showError()}</span>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {state: state};
};

export default connect(mapStateToProps, {pressKey})(Piano);