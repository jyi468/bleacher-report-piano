import './Piano.css';

const Key = ({note, color}) => {
    return (
        <div className={`key ${color} ${note}`}>
            <h3 className="note">{note}</h3>
        </div>
    );

};

export default Key;