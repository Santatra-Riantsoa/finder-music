import { FormHelperText } from "@material-ui/core";

getDataFromServer = url => {
    // utiliser fetch pour récupérer les données
    console.log("Getting data from server");
    fetch(url)
      .then(response => response.json());
      
  };

  export default helper;