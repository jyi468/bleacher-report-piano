import './Piano.css';
import {hasAccidental} from '../../utils/noteUtils';

const Key = ({note, octave}) => {
    const color = hasAccidental(note) ? 'black' : 'white';
    return (
        <div className={`key ${color} ${note} ${octave}`}>
            <h3 className="note">{note}</h3>
        </div>
    );

};

export default Key;