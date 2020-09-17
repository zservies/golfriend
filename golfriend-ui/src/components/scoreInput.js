import React from "react";
import TextField from "@material-ui/core/TextField";

export default function scoreInput(props) {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Course name" variant="outlined" />
        <TextField id="outlined-basic" label="Score" variant="outlined" />
        <TextField id="outlined-basic" label="Course rating" variant="outlined" />
        <TextField id="outlined-basic" label="Course slope" variant="outlined" />
        <TextField id="outlined-basic" label="Course PAR" variant="outlined" />
      </form>
    </div>
  );
}
