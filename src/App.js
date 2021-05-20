import './App.css';
import {LoggerProvider} from './contexts/LoggerContext';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';

function App() {
    return (
        <div className="app">
            <div className="piano-log">
                <LoggerProvider>
                    <Piano start="C4" end="B4"/>
                    <Logger/>
                </LoggerProvider>
            </div>
        </div>
    );
}

export default App;
