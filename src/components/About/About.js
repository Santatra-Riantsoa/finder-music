import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        display: 'flex'
    },
    grid: {
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'center'
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: '0 auto'
    }
}));

function About() {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid} spacing={2}>
            <Card className={classes.root} type="div">
                <CardActionArea>
                    <Avatar alt="Santatra Riantsoa" className={classes.large} src={"https://www.zupimages.net/up/20/13/2qbo.jpg"} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            RAMANAMPAMONJY Santatriniaina Riantsoa
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            email :  <br /> santatriniaina.ramanampamonjy@etu.unice.fr
          </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            <Card className={classes.root}>
                <CardActionArea>
                    <Avatar alt="Nico ANDRIAMALALA" className={classes.large} src={"https://www.zupimages.net/up/20/13/7heh.jpg"} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ANDRIAMALALA <br /> Louison Mamy Nico


          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            email : <br /> louison-mamy-nico.andriamalala@etu.univ-cotedazur.fr


          </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

        </Grid>
    )
}

export default About;