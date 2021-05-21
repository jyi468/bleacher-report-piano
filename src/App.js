import './App.css';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';

function App() {
    const pianos = [
        {singleOctave: true}, // If passing singleOctave param, do not specify anything else!
        {start: 'C1', end: 'B3'}
    ];
    return (
        <div className="app">
            {pianos.map((config, i) => {
                const {start, end, singleOctave} = config;
                return (
                    <div key={i} className="piano-log">
                        <Piano id={i} start={start} end={end} singleOctave={singleOctave}/>
                        <Logger pianoId={i} singleOctave={singleOctave}/>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
