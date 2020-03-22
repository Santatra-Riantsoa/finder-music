
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import About from "../About/About";
import "./BaseLayout.css";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import { InputBase } from "@material-ui/core";
import Detail from "../Detail/Detail";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { get } from '../../util/util';


const BaseLayout = (props) => {

    const findArtist = (artistName) => {
        get('https://wasabi.i3s.unice.fr/search/fulltext/' + artistName).then(response => {
            if (response != null) {
                const name = response[0].name;
                get('https://wasabi.i3s.unice.fr/search/artist/' + name).then(response => {
                    props.onArtistChange(response)
                })
            }


        })

    }


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
                            onChange={(event) => findArtist(event.target.value)}
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
const mapStateToProps = state => {
    return {
        art: state?.artist
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onArtistChange: (artistData) => dispatch({ type: actionTypes.CHANGE_ARTIST, artist: artistData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);

