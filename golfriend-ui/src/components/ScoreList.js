import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function ScoreList(props) {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>PAR</TableCell>
              <TableCell>Over/Under</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.scores &&
              props.scores.map((scoreItem) => (
                <TableRow key={scoreItem.id}>
                  <TableCell>{scoreItem.course}</TableCell>
                  <TableCell>{scoreItem.score}</TableCell>
                  <TableCell>{scoreItem.coursePar}</TableCell>
                  <TableCell>{scoreItem.scoreToPar}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
