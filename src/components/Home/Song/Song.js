import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Song(props) {
    const classes = useStyles();
    console.log('current album ', props.album);

    let songPlaceHolder = props.album?.songs.map((song,index) =>(
        <div key ={index}>
        <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary={song.title} />
      </ListItem>
      
      </div>
    ));
    return (
        <List component="nav" className={classes.root} aria-label="contacts">
        {songPlaceHolder}
      </List>

    )

}
export default Song;