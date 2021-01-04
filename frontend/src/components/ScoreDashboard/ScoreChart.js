import React from "react";
import "../../styles/ScoreChart.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineMarkSeries,
} from "react-vis";

export default function ScoreChart(props) {
  const data = [];
  const chartArr = props.scores.slice(-5); //Grab only the most recent ten rounds played.
  chartArr.forEach((scoreItem, index) => {
    data.push({ x: index, y: scoreItem.score });
  });
  return (
    <div className="chart-wrapper">
      <XYPlot xDomain={[0, 4]} yDomain={[35, 60]} width={650} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Date" />
        <YAxis title="Score" />
        <LineMarkSeries
          lineStyle={{ stroke: "black" }}
          markStyle={{ stroke: "black" }}
          color="grey"
          data={data}
        />
      </XYPlot>
    </div>
  );
}
