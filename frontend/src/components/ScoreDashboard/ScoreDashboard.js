import React from "react";
import AveragesToolbar from "./AveragesToolbar";
import ScoreInput from "./ScoreInput";
import ScoreList from "./ScoreList";
import "./ScoreDashboard.css";
import ScoreChart from './ScoreChart';

export default function ScoreDashboard(props) {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-summary">
        {/* <AveragesToolbar averages={props.averages}></AveragesToolbar>
        <ScoreInput createScore={props.createScore}></ScoreInput> */}
        <div class="summary-content">
        </div>
      </div>
      <div className="dashboard-widget">
      <ScoreList
            scores={props.scores}
            editScore={props.editScore}
            deleteScore={props.deleteScore}
          ></ScoreList>
      </div>
      <div className="dashboard-widget">
        <ScoreChart />
      </div>
    </div>
  );
}
