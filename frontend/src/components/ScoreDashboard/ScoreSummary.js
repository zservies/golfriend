import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScoreSummary.css";

export default function ScoreSummary(props) {

  return (
    <div className="score-summary-wrapper">
      <h2>Stat Summary</h2>
      <div className="summary-content">
        <div className="card">
          <div className="card-content">
            <h1>
              {props.averages.averageScore} <ArrowUpwardIcon />
            </h1>
            <p>average score</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>
              {props.averages.scoreToPar} <ArrowUpwardIcon />
            </h1>
            <p>Average Over/Under</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>
              {props.averages.totalRounds}
            </h1>
            <p>Rounds Played</p>
          </div>
        </div>
      </div>
    </div>
  );
}
