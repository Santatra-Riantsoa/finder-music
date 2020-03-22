import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'


export default function Header() {
  const classes = useStyles();

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
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
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

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
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
  