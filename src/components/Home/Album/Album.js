import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,

  },
  Grid: {
    flexGrow: 1,

  },
  control: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Album = (props) => {
  const classes = useStyles();


  return (
    <Card className={classes.root+" album"}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.album.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.album.title}
        subheader={props.album.dateRelease}
      />
      <CardMedia
        className={classes.media}
        image={props.album.cover?.medium}
        title={props.album.title}
        src={props.album.cover?.medium}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {
          props.album.genre && (<React.Fragment><strong>Genre : </strong> <span>{props.album.genre}</span></React.Fragment>)
        }
        {
          props.album.upc && (<React.Fragment><strong> - UPC : </strong> <span>{props.album.upc}</span></React.Fragment>)
        }
        {
          props.album.publicationDate && (<React.Fragment><strong> - Publication Date : </strong> <span>{props.album.publicationDate}</span></React.Fragment>)
        }
            
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={(event) => props.clicked(event, props.album)}>
          Play Songs
        </Button>
      </CardActions>

    </Card>


  )
}
export default Album;