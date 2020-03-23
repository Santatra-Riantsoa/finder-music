import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import _ from "lodash";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import * as actionTypes from '../../store/actions';
import { get } from '../../util/util';

const Header = (props) =>{
  const [search, setSearch] = useState([]);
  const classes = useStyles();
  const findArtist = (artistName) => {
    if(artistName==="") {
      setSearch([])
      return;
    }
    get('https://wasabi.i3s.unice.fr/search/fulltext/' + artistName).then(response => {
      if (response != null) {
          setSearch(response.filter(e=>e.albumTitle==null));
      }
    })
}

const handleSearchClick = function (name){
  get('https://wasabi.i3s.unice.fr/search/artist/' + name).then(response => {
      props.onArtistChange(response);
  }).catch(e=>console.log(e))
  .finally((e)=>{
    setSearch([])
  })
}

let debouncedFn = null;

const onChange = (event) => {
  event.persist();
  if (!debouncedFn) {
    debouncedFn =  _.debounce(() => {
       findArtist(event.target.value);
    }, 300);
  }
  debouncedFn();
}

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/">
                  <img src={logo} alt="logo" className="logo" />
              </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search an artist here…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChange}
            />
            <Card className="search-result">
            {
                (search && search.length>0) && (
                  <List dense className={classes.searchResult}>
                    {
                      search?.map((value, index) => {
                        return (
                          <React.Fragment key={index}>
                            <ListItem key={value} button onClick={(e)=>{handleSearchClick(value.name)}}>
                              <ListItemAvatar>
                                <Avatar alt="artist" src={value.picture} />
                              </ListItemAvatar>
                              <ListItemText primary={value.name} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          </React.Fragment>
                        );
                      }
                      )
                    }
                  </List>
                )
              }
            </Card>
          </div>
         
          <div className="header-nav-container">
            <nav className="header__navigation">
                <ul>
                    <li className="nav-link-container"><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-link-container"><NavLink to="/about" className="nav-link">About Us</NavLink></li>
                    <li className="nav-link-container"><a href='https://github.com/Santatra-Riantsoa/finder-music' target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a></li>
                </ul>
            </nav>
        </div>
        </Toolbar>
      </AppBar>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      zIndex: 2,
      position: 'relative'
    },

    searchResult: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      color: 'black'
    },
  
    toolbar: {
      display: "flex",
      justifyContent: "space-around"
    },
  
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    appBar: {
      backgroundColor: "#3d4977"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '45ch',
        },
      },
    },
  }));
  