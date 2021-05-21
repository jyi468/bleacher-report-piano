import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Logger.css';
import {initializeLogger, clearLogger} from '../../actions';

const Logger = ({pianoId, loggerNotes, initializeLogger, clearLogger}) => {
    useEffect(() => {
        initializeLogger(pianoId);
    }, []);

    const renderLoggerNotes = () => {
        if (!loggerNotes || !loggerNotes.length) {
            return <h3 className="logger-item">Play Something!</h3>;
        }
        return loggerNotes.map((note, i) => {
            return (
                <h3 key={i} className="logger-item">{`${note}`}</h3>
            );
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        clearLogger(pianoId);
    };
    return (
        <div className="logger">
            <a className="clear-log-btn" onClick={handleClick}>Clear Log</a>
            <br/>
            <div className="log">
                {renderLoggerNotes()}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {loggerNotes: state.logger[ownProps.pianoId] ?? []};
};

export default connect(mapStateToProps, {initializeLogger, clearLogger})(Logger);