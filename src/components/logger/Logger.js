import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Logger.css';
import {initializeLogger} from '../../actions';

const Logger = ({pianoId, loggerNotes, initializeLogger}) => {
    useEffect(() => {
        initializeLogger(pianoId);
    }, []);
    return (
        <div className="logger">
            {loggerNotes.map((note, i) => {
                return (
                    <h3 key={i} className="logger-item">{`${note}`}</h3>
                );
            })}
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {loggerNotes: state.logger[ownProps.pianoId] ?? []};
};

export default connect(mapStateToProps, {initializeLogger})(Logger);