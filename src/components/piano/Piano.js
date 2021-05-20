import React, {useState} from 'react';
import Key from './Key';
import {notesToNums, numsToNotes} from '../../constants/notes';
import {splitNoteOctave} from '../../utils/noteUtils';
import {useLoggerContext} from "../../contexts/LoggerContext";
import {usePianoContext} from "../../contexts/PianoContext";

const Piano = ({start, end}) => {
    const [startNote, startOctave] = splitNoteOctave(start);
    const [endNote, endOctave] = splitNoteOctave(end);
    const [songNotes, setSongNotes] = useState([]);
    const [state, dispatch] = usePianoContext();
    const {addLoggerNote, loggerNotes} = useLoggerContext();

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
            keys.push(<Key key={i} note={note} octave={octave}/>)
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
            // TODO: Fix logging
            dispatch({
                type: 'PRESS_KEY',
                payload: `${noteToPlay}4` // We just default to octave 4 here unless we want to enable larger keyboards
            });
            addLoggerNote(noteToPlay);
            setTimeout(() => playNotes(rest), 1000);
        }
    };


    return (
        <div className="piano">
            {renderKeys()}
            <input value={songNotes} onChange={onNotesChange}/>
            <button onClick={() => playNotes([...songNotes])}/>
        </div>
    );
};

export default Piano;