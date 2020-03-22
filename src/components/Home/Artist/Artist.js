import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
    },
    Avatar: {

    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        color: 'black'
    },
}));


function Artist(props) {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {props.name}
                        <Avatar alt="Remy Sharp" src={props.picture?.big} className={classes.large} />
                        {props.abstract}
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Birthdate</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.lifeSpan?.begin}</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Location</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.locationInfo?.join(" - ")}</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Genre</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.genres?.join(" - ")}</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Genre (DBpedia)</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.dbp_genre?.join(' - ')}</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Label</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.labels?.join(', ')}</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Label (DBpedia)</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props?.recordLabel}</Paper>
                </Grid>


                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Number of Deezer fans</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.deezerFans?.toLocaleString()}</Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Associated artist(s)</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>{props.associatedMusicalArtist?.join(' - ')}</Paper>
                </Grid>
            </Grid>

    </div>
    )

}
export default Artist;