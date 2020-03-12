
import React from "react";
import "./ListeHobbies.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Hobby from './Hobby';

class ListeHobbies extends React.Component {
  state = {
    newItem: null,
    hobbies: ["tennis", "foot"]
  };

  addHobby = () => {
    const { hobbies, newItem } = this.state;
    hobbies.push(newItem);
    this.setState({ hobbies }); // écriture raccourcie de ES6 équivalent à {hobbies:hobbies}
  };

  removeHobby = (hobbyToRemove) => {
    this.setState(prevState => {
      const newHobbiesList = prevState.hobbies.filter(
        hobby => hobby !== hobbyToRemove && hobby
      );
      return { hobbies: newHobbiesList };
    });
  };

  render() {
    // destructuration, permet d'utiliser des méthodes et propriétés
    // sans avoir besoin de les précéder par this. (par ex on utiliser
    // addHobby au lieu de this.addHobby, etc.)
    const { addHobby, removeHobby } = this;
    const { hobbies } = this.state;

      let listeDesHobbies = hobbies.map((h, index) => (
        <Hobby name={h} key={index} removeHobby={removeHobby} />
      ));

      return (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Nom du club</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{listeDesHobbies}</TableBody>
          </Table>
        </TableContainer>
        /*
        return (
          <div>
            <input
              type="text"
              onChange={evt => this.setState({ newItem: evt.target.value })}
            />
            <button onClick={addHobby}>Add Hobby</button>
            <p>Nombre de Hobbies : {hobbies.length}</p>
            <p>Liste des hobbies :</p>
            <ul>
              {hobbies.map((el, index) => (
                <Hobby name={el} key={index} removeHobby={removeHobby} />
              ))}
            </ul>
          </div>
        );
        */
      );
  }
}

export default ListeHobbies;