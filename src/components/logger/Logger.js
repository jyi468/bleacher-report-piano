import React from 'react';
import './Logger.css';
import {connect} from 'react-redux';

const Logger = ({loggerNotes}) => {
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

const mapStateToProps = (state) => {
    return {loggerNotes: state.logger};
};

export default connect(mapStateToProps, null)(Logger);