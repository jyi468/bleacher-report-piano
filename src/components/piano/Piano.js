import React, {useState, useEffect} from 'react';
import Key from './Key';
import {notesToNums, numsToNotes} from '../../constants/notes';
import {connect} from 'react-redux';
import {splitNoteOctave} from '../../utils/noteUtils';
import {pressKey, initializePiano} from "../../actions";

const Piano = ({id, start, end, pressKey}) => {
    const [startNote, startOctave] = splitNoteOctave(start);
    const [endNote, endOctave] = splitNoteOctave(end);
    const [songNotes, setSongNotes] = useState([]);
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
            setSongNotes(e.target.value.split(','))
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
                <input value={songNotes} onChange={onNotesChange}/>
                <a onClick={(e) => {
                    e.preventDefault();
                    playNotes([...songNotes])
                }}>Play</a>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {state: state};
};

export default connect(mapStateToProps, {pressKey})(Piano);