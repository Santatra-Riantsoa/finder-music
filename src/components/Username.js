import React from "react";
import "./Username.css";

function Username({name, age}) {
  return (
    <div className="App">
          <h2 className="Username-h2">{name}, age = {age}</h2>
    </div>
  );
}

export default Username;
