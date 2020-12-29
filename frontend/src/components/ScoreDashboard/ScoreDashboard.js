import React from "react";
import AveragesToolbar from "./AveragesToolbar";
import ScoreInput from "./ScoreInput";
import ScoreList from "./ScoreList";
import "./ScoreDashboard.css";

export default function ScoreDashboard(props) {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-summary">
        <AveragesToolbar averages={props.averages}></AveragesToolbar>
      <ScoreInput createScore={props.createScore}></ScoreInput>
      <ScoreList
        scores={props.scores}
        editScore={props.editScore}
        deleteScore={props.deleteScore}
      ></ScoreList>
      </div>
      <div className="dashboard-widget">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nam
        quibusdam doloribus voluptates? Autem omnis quasi amet doloribus
        praesentium labore commodi saepe. Dignissimos alias, reiciendis suscipit
        tenetur illum saepe delectus nemo! Beatae amet corrupti esse at aut
        fugit, dignissimos est dolore alias, neque soluta, minima error
        voluptates! Totam molestias ab magni quaerat nisi rerum distinctio?
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
