


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Album from './Album/Album'

const useStyles = makeStyles(theme => ({
    
  }));
  
function Albums(props) {
    const classes = useStyles();
  console.log(props.albums);


  let albumsPlaceHolder=props.albums.map((one ,index)=>(
        <div>
            <Album key={index} album={one} clicked={props.clicked}/>

        </div>
       ));
    
    return (
        <Grid container className={classes.Grid} spacing={8}>
            
            {albumsPlaceHolder}

        </Grid>
        
    )
}
export default Albums;