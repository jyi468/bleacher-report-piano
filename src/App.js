import './App.css';
import {NoteProvider} from './contexts/NoteContext';
import Piano from "./components/piano/Piano";
import Logger from './components/logger/Logger';

function App() {
    return (
        <div className="app">
            <div className="piano-log">
                <NoteProvider>
                    <Piano start="C4" end="B4"/>
                    <Logger/>
                </NoteProvider>
            </div>
        </div>
    );
}

export default App;
