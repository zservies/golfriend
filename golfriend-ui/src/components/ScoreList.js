import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import EditScoreModal from "./EditScoreModal";

const useStyles = makeStyles({
  tableCell: {
    color: "white",
    fontSize: "1rem",
  },
  tableHead: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  iconButton: {
    color: "grey",
  },
});

export default function ScoreList(props) {
  const classes = useStyles();

  const tableHeader = (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableHead}>Course</TableCell>
        <TableCell className={classes.tableHead}>Score</TableCell>
        <TableCell className={classes.tableHead}>PAR</TableCell>
        <TableCell className={classes.tableHead}>Over/Under</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );

  // https://stackoverflow.com/questions/37771316/react-triggering-click-event-on-table-row
  const deleteScore = (scoreItem) => {
    props.deleteScore(scoreItem.id);
  };

  // Not making functional until edit UX/architecture is determined.
  const editScore = (scoreItem) => {
    console.log(scoreItem.id);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          {tableHeader}
          <TableBody>
            {props.scores &&
              props.scores.map((scoreItem) => (
                <TableRow key={scoreItem.id}>
                  <TableCell className={classes.tableCell}>
                    {scoreItem.course}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {scoreItem.score}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {scoreItem.coursePar}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {scoreItem.scoreToPar}
                  </TableCell>
                  <TableCell>
                    <EditScoreModal></EditScoreModal>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      className={classes.iconButton}
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
