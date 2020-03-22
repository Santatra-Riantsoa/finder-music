
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import About from "../About/About";
import "./BaseLayout.css";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import { InputBase } from "@material-ui/core";
import Detail from "../Detail/Detail";

function BaseLayout() {  
  return (
    <div className="global-container">
        <div className="header">
            <div className="header-nav-container">
                <div className="header__logo">
                    Finder Music Logo
                </div>
                <nav className="header__navigation">
                    <ul>
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                        <li><a href='https://github.com/Santatra-Riantsoa/finder-music' target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__search">
                <div className="search">
                <span className="material-icons search-icon ">
                    search
                </span>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: "input-root",
                            input: "input-input",
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
        </div>
        <div className="main-content">
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route component={NotFound} />
            </Switch>
        </div>
        <div className="footer">

        </div>
        
    </div>
  );
}

export default BaseLayout;

