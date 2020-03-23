
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from '../../components/Util/Header';
import About from "../About/About";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./BaseLayout.css";

function BaseLayout() {  
  return (
    <div className="global-container">
        <Header />
        <div className="main-content">
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    </div>
  );
}

export default BaseLayout;

