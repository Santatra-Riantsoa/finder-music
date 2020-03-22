
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./BaseLayout.css";
import ListeHobbies from "./ListeHobbies";
import About from "./About";
import NotFound from "./NotFound";

function BaseLayout() {  
  return (
    <div>
        <div className="header">
            <NavLink to="/">Home</NavLink>
            &nbsp;
            <NavLink to="/about">About Us</NavLink>
            &nbsp;
            <a href='https://github.com/Santatra-Riantsoa/finder-music' target="_blank" rel="noopener noreferrer">GitHub</a>
            &nbsp;
        </div>
        <div className="main-content">
            <Switch>
                <Route path="/" exact component={ListeHobbies}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
        
    </div>
  );
}

export default BaseLayout;

