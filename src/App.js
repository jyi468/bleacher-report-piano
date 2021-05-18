import './App.css';

function App() {
  return (
      <div className="piano">
          <div className="key white C">
              <h2 className="note">C</h2>
          </div>
          <div className="key black C#">
              <h2 className="note">C#</h2>
          </div>
          <div className="white D"></div>
          <div className="black D#"></div>
          <div className="white E"></div>
          <div className="white F"></div>
          <div className="black F#"></div>
          <div className="white G"></div>
          <div className="black G#"></div>
          <div className="white A"></div>
          <div className="black A#"></div>
          <div className="white B"></div>
      </div>
  );
}

export default App;
