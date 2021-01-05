import React from "react";
import ScoreList from "./ScoreDashboard/ScoreList";

export default function History(props) {
  return (
    <div>
      <ScoreList
        scores={props.scores}
        editScore={props.editScore}
        deleteScore={props.deleteScore}
      />
    </div>
  );
}
