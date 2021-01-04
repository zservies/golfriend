import React from "react";
import AveragesToolbar from "./AveragesToolbar";
import ScoreInput from "./ScoreInput";
import ScoreList from "./ScoreList";
import "./ScoreDashboard.css";
import ScoreChart from "./ScoreChart";
import ScoreSummary from "./ScoreSummary";

export default function ScoreDashboard(props) {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div id="score-summary" className="dashboard-widget">
        <ScoreSummary></ScoreSummary>
      </div>
      <div id="quick-add" className="dashboard-widget">
        <ScoreInput></ScoreInput>
      </div>
      <div className="dashboard-widget">
        <ScoreList
          scores={props.scores}
          editScore={props.editScore}
          deleteScore={props.deleteScore}
        ></ScoreList>
      </div>
      <div className="dashboard-widget">
        <ScoreChart scores={props.scores} />
      </div>
    </div>
  );
}
