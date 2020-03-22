
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Detail from "../Detail/Detail";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Header from '../../components/Util/Header'

function BaseLayout() {  
  return (
    <div className="global-container">
        <Header />
        <div className="main-content">
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    </div>
  );
}

export default BaseLayout;

