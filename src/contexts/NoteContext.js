import React, {useContext, createContext, useState} from 'react';

const NoteContext = createContext(null);

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [limit, setLimit] = useState(null);
    return (
        <NoteContext.Provider value={{notes, setNotes, limit, setLimit}}>
            {children}
        </NoteContext.Provider>
    )
};

export const useNoteContext = () => useContext(NoteContext);