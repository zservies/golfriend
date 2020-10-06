import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ScoreInput from "./components/ScoreInput";
import ScoreList from "./components/ScoreList";
import SideDrawer from "./components/SideDrawer";
import Landing from "./components/Landing";

function App() {
  const [scores, setScores] = useState([]);
  const createScore = async (score) => {
    console.log(score);
    const result = await axios.post("http://localhost:3003/scores", score);
    fetchScores();
    console.log(result);
  };

  const fetchScores = async () => {
    try {
      const result = await axios.get("http://localhost:3003/scores");
      result.data.pop(); // Removing averages' object from score array
      setScores(result.data);
    } catch (error) {
      setScores([]);
    }
  };

  const deleteScore = async (id) => {
    try {
      await axios.delete("http://localhost:3003/scores/" + id);
      fetchScores(); // Fetch new scores after successfully deleting.
    } catch (error) {
      console.log(error);
    }
  };

  const editScore = async (editedScore) => {
    console.log(editedScore);
    try {
      await axios.put(
        "http://localhost:3003/scores/" + editedScore.id,
        editedScore
      );
      fetchScores();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="App-header">
        <SideDrawer></SideDrawer>
        <Route exact path = "/">
          <Landing></Landing>
        </Route>
          <Route exact path="/dashboard">
            <ScoreInput createScore={createScore}></ScoreInput>
            <ScoreList
              scores={scores}
              editScore={editScore}
              deleteScore={deleteScore}
            ></ScoreList>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
