import React from "react";
import "./Photos.css";

class Photos extends React.Component {
  state = {
      photos: []
  };
 idPhoto;
    
  constructor(props) {
      super(props);
      console.log("ID = " + props.match.params.id);
      this.idPhoto = props.match.params.id;
  }

    componentDidMount = () => {
      console.log("On va récupérer la photo No : " + this.idPhoto);
    let url = "https://jsonplaceholder.typicode.com/photos";
    console.log("Appelé avant le premier rendu du composant");
    //this.getDataFromServer(url);
  };
  getDataFromServer = url => {
    // utiliser fetch pour récupérer les données
    console.log("Getting data from server");
    fetch(url)
      .then(response => response.json())
      .then(reponseJavaScript => {
        console.log(reponseJavaScript);
        this.setState({
          photos: reponseJavaScript
        });
      });
  };

  render() {
    // todo : afficher les photos qui sont dans le state dans
    // un tableau, une image pour le thumbnail et la description et le no de l'album

    const { photos } = this.state;

    let list = photos.map((el, index) => {
      //if (index > 20) return;

      return (
        <tr key={index}>
          <td>
            <img src={el.thumbnailUrl} />
          </td>
          <td>{el.title}</td>
          <td>{el.albumId}</td>
        </tr>
      );

      // return <PhotoDetail desc={el}/>
    });

    // todo No 2 à faire plus tard : un composant dédié "PhotoDetail" qui affiche l'image
    // en grand, avec la description dessous (peu importe le style html on arrangera
    // plus tard)
    return (
      <div>
        <h1>Composant Photos</h1>
        <table style={{ border: "2" }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Description</th>
              <th>No Album</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default Photos;
