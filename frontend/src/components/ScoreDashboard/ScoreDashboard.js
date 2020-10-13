import React from "react";
import AveragesToolbar from "./AveragesToolbar";
import ScoreInput from "./ScoreInput";
import ScoreList from "./ScoreList";

export default function ScoreDashboard(props) {
  return (
    <div>
      <AveragesToolbar averages={props.averages}></AveragesToolbar>
      <ScoreInput createScore={props.createScore}></ScoreInput>
      <ScoreList
        scores={props.scores}
        editScore={props.editScore}
        deleteScore={props.deleteScore}
      ></ScoreList>
    </div>
  );
}
