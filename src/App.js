import './App.css';
import {LoggerProvider} from './contexts/LoggerContext';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';
import {PianoProvider} from "./contexts/PianoContext";

function App() {
    return (
        <div className="app">
            <div className="piano-log">
                <LoggerProvider>
                    <PianoProvider>
                        <Piano start="C4" end="B4"/>
                    </PianoProvider>
                    <Logger/>
                </LoggerProvider>
            </div>
        </div>
    );
}

export default App;
