import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreGroupeRock = ({ membre }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {membre.name}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.birthDate}
    </TableCell>
  </TableRow>
);

export default MembreGroupeRock;
