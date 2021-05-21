import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Logger.css';
import {initializeLogger, clearLogger} from '../../actions';

const Logger = ({pianoId, loggerNotes, initializeLogger, clearLogger}) => {
    useEffect(() => {
        initializeLogger(pianoId);
    }, []);

    const renderLogger = () => {
        if (!loggerNotes || !loggerNotes.length) {
            return <h3>Play Something!</h3>;
        }
        return (
            <div className="log">
                {loggerNotes.map((note, i) => <h3 key={i} className="logger-item">{`${note}`}</h3>)}
            </div>
        )
    };

    const handleClick = (e) => {
        e.preventDefault();
        clearLogger(pianoId);
    };
    return (
        <div className="logger">
            <a className="clear-log-btn" onClick={handleClick}>Clear Log</a>
            <br/>
            {renderLogger()}
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {loggerNotes: state.logger[ownProps.pianoId] ?? []};
};

export default connect(mapStateToProps, {initializeLogger, clearLogger})(Logger);