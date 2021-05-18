import React from 'react';
import Key from './Key';

const Piano = () => {
    const keys =
        [
            ['C', 'white'],
            ['C#', 'black'],
            ['D', 'white'],
            ['D#', 'black'],
            ['E', 'white'],
            ['F', 'white'],
            ['F#', 'black'],
            ['G', 'white'],
            ['G#', 'black'],
            ['A', 'white'],
            ['A#', 'black'],
            ['B', 'white']
        ];
    return (
        <div className="piano">
            {keys.map(
                ([note, color], i) => <Key key={i} note={note} color={color}/>
            )}
        </div>
    );
};

export default Piano;