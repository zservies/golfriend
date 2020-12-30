import React from "react";
import "./ScoreChart.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineMarkSeries,
} from "react-vis";

export default function ScoreChart(props) {
  const data = [
    { x: 0, y: 33 },
    { x: 1, y: 43 },
    { x: 2, y: 42 },
    { x: 3, y: 42 },
    { x: 4, y: 42 },
    { x: 5, y: 44 },
    { x: 6, y: 41 },
    { x: 7, y: 48 },
    { x: 8, y: 43 },
    { x: 9, y: 45 },
  ];
  return (
    <div className="chart-wrapper">
      <XYPlot width={900} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
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
