import './App.css';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';

function App() {
    const pianos = [
        {start: 'C4', end: 'B4'},
        {start: 'C4', end: 'B4'}
    ];
    return (
        <div className="app">
            {pianos.map((config, i) => {
                const {start, end} = config;
                return (
                    <div key={i} className="piano-log">
                        <Piano id={i} start={start} end={end}/>
                        <Logger pianoId={i}/>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
