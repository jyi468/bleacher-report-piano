const hasAccidental = note => note.includes('#') || note.includes('b');

const splitNoteOctave = noteOctave => {
    const i = hasAccidental(noteOctave) ? 2 : 1;
    return [noteOctave.slice(0, i), noteOctave.slice(i, noteOctave.length)];
};

export {hasAccidental, splitNoteOctave};