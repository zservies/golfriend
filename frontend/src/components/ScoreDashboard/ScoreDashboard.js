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
          <ScoreChart></ScoreChart>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
        similique, magni ipsum recusandae a provident id aliquam nobis. Quasi
        odio ipsam veniam expedita minus sapiente quisquam sint perferendis
        consequatur, molestias dolores adipisci unde doloribus hic officia quia!
        Esse error pariatur enim ex officia aliquam? Placeat dolorem alias,
        temporibus iusto excepturi accusamus tempora officiis ab ea optio
        architecto dolores et?
      </div>
    </div>
  );
}
