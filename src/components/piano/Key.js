import './Piano.css';
import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {hasAccidental} from '../../utils/noteUtils';
import {pressKey, releaseKey} from "../../actions";

const Key = ({note, octave, pianoId, isInverted, pressKey, releaseKey}) => {
    const color = hasAccidental(note) ? 'black' : 'white';

    useEffect(() => {
        // TODO: Add action parameters to determine how long highlight is based on play or click
        const timerId = setTimeout(() => {
            releaseKey(note, octave, pianoId);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [isInverted]);

    const renderClasses = () => {
        return `key ${color} ${note} ${octave} ${isInverted ? 'invert' : ''}`
    };

    const handleOnClick = () => {
        pressKey(note, octave, pianoId);
    };

    return (
        <div onClick={handleOnClick} className={renderClasses()}>
            <h3 className="note">{note}</h3>
        </div>
    );

};

const mapStateToProps = (state, {note, octave, pianoId}) => {
    let pianoState = state.piano[pianoId] ?? {};
    let keyState = pianoState[`${note}${octave}`] ?? {};
    return {isInverted: keyState.isInverted ?? false};
};

export default connect(mapStateToProps, {pressKey, releaseKey})(Key);