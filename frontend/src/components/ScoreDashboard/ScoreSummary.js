import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScoreSummary.css";

const useStyles = makeStyles({
  root: {
    width: "150px",
    minHeight: "150px",
    backgroundColor: "#f0f0ef",
  },
});

export default function ScoreSummary(props) {
  const classes = useStyles();

  return (
    <div className="score-summary-wrapper">
      <h2>Stat Summary</h2>
      <div className="summary-content">
        <div className="card">
          <div className="card-content">
            <h1>
              44 <ArrowUpwardIcon />
            </h1>
            <p>average score</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>
              +3 <ArrowUpwardIcon />
            </h1>
            <p>Average Over/Under</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>
              44 <ArrowUpwardIcon />
            </h1>
            <p>Rounds Played</p>
          </div>
        </div>
      </div>
    </div>
  );
}
