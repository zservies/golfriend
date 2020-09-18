import React from "react";
import "./App.css";
import ScoreInput from './components/ScoreInput';

function App() {

  const createScore = (data) => {
    console.log(data);
  }

  return (
    <div className="App">
      <div className="App-header">
        <ScoreInput createScore={createScore}></ScoreInput>
      </div>
    </div>
  );
}

export default App;
