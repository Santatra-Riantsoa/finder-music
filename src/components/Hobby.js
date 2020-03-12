
import React from "react";
import "./Hobby.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Hobby = ({ removeHobby, name }) => (
  <TableRow>
      <TableCell onClick={() => removeHobby(name)} component="th" scope="row">
        {name}
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
    </TableRow>
);

export default Hobby;
