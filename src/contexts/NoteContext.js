import React, {useContext, createContext, useState} from 'react';

const NoteContext = createContext(null);

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState(new Map());
    return (
        <NoteContext.Provider value={notes, setNotes}>
            {children}
        </NoteContext.Provider>
    )
};

export const useNoteContext = () => useContext(NoteContext);