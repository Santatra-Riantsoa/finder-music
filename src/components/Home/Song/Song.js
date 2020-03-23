import React,{ useState , useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: '15px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const Song= (props) =>{
    const [currentSong, setCurrentSong] = useState({ song:null,isPlayed:false});
    const [audio, setAudio] =useState(new Audio(""));
    const classes = useStyles();
    const theme = useTheme();
    useEffect(() => {
        audio.pause();
            },
      [audio],[currentSong]
    );
    const playSong =(song)=>{
        setCurrentSong(state=>{
            return {song : song.song,isPlayed : !state.isPlayed}
        });
        audio.pause();

        setAudio(new Audio(song.song.preview,));
        if(currentSong?._id === song._id){
            currentSong.isPlayed? audio.play() : audio.pause();
            }
       
    }
    const displayPlay = (song)=>{
        let isPlayed = false;

        if(song._id === currentSong?.song?._id){
            let currentStatus = {...currentSong};
            isPlayed = !currentStatus.isPlayed;
        }
        if(!isPlayed){
             return (
                <PlayArrowIcon className={classes.playIcon} onClick={()=>playSong({song:song,isPlayed: true})}/>
        
            )
        }
        else{
            return (<PauseIcon className={classes.playIcon} onClick={()=>playSong({song:song,isPlayed: false})}/>)

        }
    }
    const songPlaceHolder = props.album?.songs.map((song, index) => (
        
        <div key={index}>
            <Card className={classes.root}>
            <CardMedia
                    className={classes.cover}
                    image={props.album.cover?.medium}
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {song.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Album : {props.album?.name}
          </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    
                        <IconButton aria-label="play/pause">
                            {displayPlay(song)}
                        </IconButton>
                        
                    </div>
                </div>
               
            </Card>

        </div>
    ));
    return (
        
        <div>
            {songPlaceHolder}

        </div>

    )

}
export default Song;