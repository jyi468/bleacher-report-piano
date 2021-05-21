import './App.css';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';

function App() {
    return (
        <div className="app">
            <div className="piano-log">
                <Piano id="1" start="C4" end="B4"/>
                <Logger pianoId="1"/>
            </div>
            <div className="piano-log">
                <Piano id="2" start="C4" end="B5"/>
                <Logger pianoId="2"/>
            </div>
        </div>
    );
}

export default App;
