import React, {useContext, createContext, useState} from 'react';

const LoggerContext = createContext(null);

export const LoggerProvider = ({children}) => {
    const [loggerNotes, setLoggerNotes] = useState([]);
    const [limit, setLimit] = useState(null);
    return (
        <LoggerContext.Provider value={{loggerNotes, setLoggerNotes, limit, setLimit}}>
            {children}
        </LoggerContext.Provider>
    )
};

export const useLoggerContext = () => useContext(LoggerContext);