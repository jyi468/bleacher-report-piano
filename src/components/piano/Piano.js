import React from 'react';
import Key from './Key';
import {notesToNums, numsToNotes} from '../../constants/notes';
import {splitNoteOctave} from '../../utils/noteUtils';

const Piano = ({start, end}) => {
    const [startNote, startOctave] = splitNoteOctave(start);
    const [endNote, endOctave] = splitNoteOctave(end);

    /**
     * We render each Key based on the start and end inputs for the Piano using base 12.
     * This allows us to get a Piano of arbitrary size with the start and end notes.
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

    return (
        <div className="piano">
            {renderKeys()}
        </div>
    );
};

export default Piano;