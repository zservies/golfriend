import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ScoreInput from "./components/ScoreInput";
import ScoreItem from "./components/ScoreItem";

function App() {

  const [scores, setScores] = useState("");
  const createScore = async (score) => {
    console.log(score);
    const result = await axios.post("http://localhost:3003/scores", score);
    fetchScores();
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
        {scores && scores.map((scoreItem)=>(
          <ScoreItem key = {scoreItem.id} scoreItem={scoreItem}></ScoreItem>
        ))}
      </div>
    </div>
  );
}

export default App;
