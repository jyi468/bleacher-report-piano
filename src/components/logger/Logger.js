import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Logger.css';
import {initializeLogger} from '../../actions';

const Logger = ({pianoId, loggerNotes, initializeLogger}) => {
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
    return (
        <div className="logger">
            {renderLoggerNotes()}
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {loggerNotes: state.logger[ownProps.pianoId] ?? []};
};

export default connect(mapStateToProps, {initializeLogger})(Logger);