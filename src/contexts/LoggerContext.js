import React, {useContext, createContext, useState, useEffect} from 'react';

const LoggerContext = createContext(null);

export const LoggerProvider = ({children}) => {
    const [id, setId] = useState(new Date());
    const [loggerNotes, setLoggerNotes] = useState([]);
    const [limit, setLimit] = useState(null);

    const addLoggerNote = (note) => {
        let newLoggerNotes = [`${note}`, ...loggerNotes];
        if (limit && newLoggerNotes.length === limit) {
            newLoggerNotes.pop();
        }
        setLoggerNotes(newLoggerNotes);
    };

    return (
        <LoggerContext.Provider value={{loggerNotes, addLoggerNote}}>
            {children}
        </LoggerContext.Provider>
    )
};

export const useLoggerContext = () => useContext(LoggerContext);