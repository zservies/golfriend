import React from "react";
import axios from "axios";
import "./App.css";
import ScoreInput from "./components/ScoreInput";

function App() {
  const createScore = async (score) => {
    console.log(score);
    const result = await axios.post("http://localhost:3003/scores", score);
    console.log(result);
  };

  return (
    <div className="App">
      <div className="App-header">
        <ScoreInput createScore={createScore}></ScoreInput>
      </div>
    </div>
  );
}

export default App;
