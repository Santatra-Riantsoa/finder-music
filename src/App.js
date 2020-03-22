import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/BaseLayout";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={BaseLayout}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
