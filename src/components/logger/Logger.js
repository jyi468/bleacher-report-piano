import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Logger.css';
import {initializeLogger, clearLogger} from '../../actions';
import {splitNoteOctave} from '../../utils/noteUtils';

const Logger = ({pianoId, singleOctave, loggerNotes, initializeLogger, clearLogger}) => {
    useEffect(() => {
        initializeLogger(pianoId);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        clearLogger(pianoId);
    };
    return (
        <div className="logger">
            <a className="clear-log-btn" onClick={handleClick}>Clear Log</a>
            <br/>
            <div className="log">
                {loggerNotes && loggerNotes.length ?
                    loggerNotes.map((note, i) => <h3 key={i} className="logger-item">{singleOctave ? splitNoteOctave(note)[0] : note}</h3>) :
                    <h3 className="logger-item">Play Something!</h3>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {loggerNotes: state.logger[ownProps.pianoId] ?? []};
};

export default connect(mapStateToProps, {initializeLogger, clearLogger})(Logger);