import './Piano.css';
import React, {useEffect, useState, useRef} from 'react';
import {connect} from "react-redux";
import {hasAccidental} from '../../utils/noteUtils';
import {pressKey, releaseKey, setIsMouseDown} from "../../actions";
import synth from '../../utils/synth';

const Key = ({note, octave, singleOctave, pianoId, isInverted, pressKey, releaseKey, setIsMouseDown, isMouseDown}) => {
    const color = hasAccidental(note) ? 'black' : 'white';
    const keyRef = useRef();
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        // TODO: Add action parameters to determine how long highlight is based on play or click
        const timerId = setTimeout(() => {
            releaseKey(`${note}${octave}`, pianoId);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [isInverted]);

    const renderClasses = () => {
        return `key ${color} ${note} ${octave} ${isInverted ? 'invert' : ''}`
    };

    const onPress = () => {
        if (!isPressed) {
            pressKey(`${note}${octave}`, pianoId);
            setIsPressed(true);
            setIsMouseDown(true);
            if (keyRef.current) {
                keyRef.current.classList.add("active");
            }
            synth.triggerAttack(`${note}${octave}`);
        }
    };

    const onRelease = () => {
        setIsPressed(false);
        setIsMouseDown(false);
        if (keyRef.current) {
            keyRef.current.classList.remove("active");
        }
        synth.triggerRelease(`${note}${octave}`);
    };

    const onMouseUp = () => {
        onRelease();
        setIsMouseDown(false);
    };

    const onMouseEnter = () => {
        if (isMouseDown) {
            onPress();
        }
    };

    const mouseEvents = {
        onMouseDown: () => onPress(),
        onMouseUp: () => onMouseUp(),
        onMouseLeave: () => onRelease(),
        onMouseEnter: () => onMouseEnter()
    };

    return (
        <div ref={keyRef} className={renderClasses()} {...mouseEvents}>
            <h4 className="note">{singleOctave ? note : `${note}${octave}`}</h4>
        </div>
    );

};

const mapStateToProps = (state, {note, octave, pianoId}) => {
    let pianoState = state.piano[pianoId] ?? {};
    let keyState = pianoState[`${note}${octave}`] ?? {};
    return {isInverted: keyState.isInverted ?? false, isMouseDown: state.mouse.isMouseDown};
};

export default connect(mapStateToProps, {pressKey, releaseKey, setIsMouseDown})(Key);