import React from "react";

export default function AveragesToolbar(props) {
  return (
    <div>
      <h6>Average Score: {props.averages.averageScore}</h6>
      <h6>Average PAR: {props.averages.averagePar}</h6>
      <h6>Average Over/Under: {props.averages.scoreToPar}</h6>
    </div>
  );
}
