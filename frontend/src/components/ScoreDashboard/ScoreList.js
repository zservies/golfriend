import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditScoreModal from "./EditScoreModal";

export default function ScoreList(props) {

  // https://stackoverflow.com/questions/37771316/react-triggering-click-event-on-table-row
  const deleteScore = (scoreItem) => {
    props.deleteScore(scoreItem.id);
  };

  // Not making functional until edit UX/architecture is determined.
  const editScore = (scoreItem) => {
    props.editScore(scoreItem);
  };

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
                  <TableCell>
                    <EditScoreModal
                      scoreItem={scoreItem}
                      editScore={editScore}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => deleteScore(scoreItem)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
