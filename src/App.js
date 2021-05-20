import './App.css';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';

function App() {
    return (
        <div className="app">
            <div className="piano-log">
                <Piano start="C4" end="B4"/>
                <Logger/>
            </div>
        </div>
    );
}

export default App;
