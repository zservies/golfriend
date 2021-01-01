import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import ScoreDashboard from "./components/ScoreDashboard/ScoreDashboard";

function App() {
  const [scores, setScores] = useState([]);
  const [averages, setAverages] = useState({});
  const createScore = async (score) => {
    console.log(score);
    const result = await axios.post("http://localhost:3003/scores", score);
    fetchScores();
    console.log(result);
  };

  const fetchScores = async () => {
    try {
      const result = await axios.get("http://localhost:3003/scores");
      const averagesObj = result.data[result.data.length - 1]; // Grabbing last item from array (always the averages).
      result.data.pop(); // Removing averages' object from score array
      setAverages(averagesObj); // Setting averages state.
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
      <div className="app-wrapper">
        <div className="content-column">
          <Route exact path="/">
            <Landing></Landing>
          </Route>
        </div>
        <div className="content-column-2">
          <Route exact path="/dashboard">
            <ScoreDashboard
              averages={averages}
              createScore={createScore}
              scores={scores}
              editScore={editScore}
              deleteScore={deleteScore}
            ></ScoreDashboard>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
