import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import nico from '../../assets/img/Nico.jpg';
import santatra from '../../assets/img/santatra.jpg';

const useStyles = makeStyles(theme =>({
    root: {
        maxWidth: 345,
        display: 'flex'
    },
    grid : {
        display : 'flex',
        alignItems :' center',
        justifyContent :'center'
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
        <Card className={classes.root}>
            <CardActionArea>
            <Avatar alt="Cindy Baker" className= {classes.large} src={santatra} />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        RAMANAMPAMONJY Santatriniaina Riantsoa
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        email : santatriniaina.ramanampamonjy@etu.unice.fr
          </Typography>
                </CardContent>
            </CardActionArea>

        </Card>

            <Card className={classes.root}>
                <CardActionArea>
                <Avatar alt="Cindy Baker" className= {classes.large} src={nico} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Louison Mamy Nico ANDRIAMALALA


          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            email : louison-mamy-nico.andriamalala@etu.univ-cotedazur.fr


          </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

        </Grid>
    )
}

export default About;