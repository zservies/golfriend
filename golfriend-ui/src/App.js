import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ScoreInput from "./components/ScoreInput";

function App() {

  const [scores, setScores] = useState("");
  const createScore = async (score) => {
    console.log(score);
    const result = await axios.post("http://localhost:3003/scores", score);
    console.log(result);
  };

  const fetchScores = async () => {
    try {
      const result = await axios.get("http://localhost:3003/scores");
      setScores(result.data);
    } catch (error) {
      setScores([]);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <ScoreInput createScore={createScore}></ScoreInput>
      </div>
    </div>
  );
}

export default App;
