import React from "react";
import "./app.css";
import romanToInt from "./components/roman-to-int";

function App() {
  const romanToIntValue = romanToInt("MCMXCIV");

  return (
    <div className="App">
      <header className="App-header">
        <p>{romanToIntValue}</p>
      </header>
    </div>
  );
}

export default App;
