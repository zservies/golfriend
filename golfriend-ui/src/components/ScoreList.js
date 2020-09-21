import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

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
  deleteIcon: {
    color: "grey",
  },
});

export default function ScoreList(props) {
  const classes = useStyles();

  const deleteScore = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Course</TableCell>
              <TableCell className={classes.tableHead}>Score</TableCell>
              <TableCell className={classes.tableHead}>PAR</TableCell>
              <TableCell className={classes.tableHead}>Over/Under</TableCell>
            </TableRow>
          </TableHead>
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
                    <IconButton
                      className={classes.deleteIcon}
                      onClick={deleteScore}
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
