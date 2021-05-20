import React, {useContext, createContext, useState} from 'react';

const LoggerContext = createContext(null);

export const LoggerProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [limit, setLimit] = useState(null);
    return (
        <LoggerContext.Provider value={{notes, setNotes, limit, setLimit}}>
            {children}
        </LoggerContext.Provider>
    )
};

export const useLoggerContext = () => useContext(LoggerContext);