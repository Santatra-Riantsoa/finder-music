import { Avatar, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import LanguageIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import "./Detail.css";

export default function Detail(props){
        const artistInfo = props.artist;
        return (
            <div>
                <Card className="card">
                    <CardContent className="card-content">
                        <div className="artist-header">
                            <div className="link-container">
                                 <ul>    
                                    <li><a href={artistInfo.urlWikipedia} target="_blank" rel="noopener noreferrer"><Avatar alt="Wikipedia" src="https://wasabi.i3s.unice.fr/img/wikipedia_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlFacebook} target="_blank" rel="noopener noreferrer"><Avatar alt="Facebook" src="https://wasabi.i3s.unice.fr/img/facebook_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlTwitter} target="_blank" rel="noopener noreferrer"><Avatar alt="Twitter" src="https://wasabi.i3s.unice.fr/img/twitter_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlAmazon} target="_blank" rel="noopener noreferrer"><Avatar alt="Amazon" src="https://wasabi.i3s.unice.fr/img/amazon_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlYouTube} target="_blank" rel="noopener noreferrer"><Avatar alt="Youtube" src="https://wasabi.i3s.unice.fr/img/youtube_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlSpotify} target="_blank" rel="noopener noreferrer"><Avatar alt="Spotify" src="https://wasabi.i3s.unice.fr/img/spotify_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlDeezer} target="_blank" rel="noopener noreferrer"><Avatar alt="Deezer" src="https://wasabi.i3s.unice.fr/img/deezer_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlITunes} target="_blank" rel="noopener noreferrer"><Avatar alt="iTunes" src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlSoundCloud} target="_blank" rel="noopener noreferrer"><Avatar alt="SoundCloud" src="https://wasabi.i3s.unice.fr/img/soundcloud_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlMySpace} target="_blank" rel="noopener noreferrer"><Avatar alt="MySpace" src="https://wasabi.i3s.unice.fr/img/myspace_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlMusicBrainz} target="_blank" rel="noopener noreferrer"><Avatar alt="MusicBrainz" src="https://wasabi.i3s.unice.fr/img/musicbrainz_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlOfficialWebsite} target="_blank" rel="noopener noreferrer"><Avatar alt="OfficialWebsite" src="https://wasabi.i3s.unice.fr/img/website_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlAllmusic} target="_blank" rel="noopener noreferrer"><Avatar alt="AllMusic" src="https://wasabi.i3s.unice.fr/img/allmusic_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlDiscogs} target="_blank" rel="noopener noreferrer"><Avatar alt="Discogs" src="https://wasabi.i3s.unice.fr/img/discogs_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlPureVolume} target="_blank" rel="noopener noreferrer"><Avatar alt="PureVolume" src="https://wasabi.i3s.unice.fr/img/purevolume_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlRateYourMusic} target="_blank" rel="noopener noreferrer"><Avatar alt="RateYourMusic" src="https://wasabi.i3s.unice.fr/img/rateyourmusic_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlLastFm} target="_blank" rel="noopener noreferrer"><Avatar alt="LastFm" src="https://wasabi.i3s.unice.fr/img/lastfm_icon.svg" /></a></li>
                                    <li><a href={artistInfo.urlDiscogs} target="_blank" rel="noopener noreferrer"><Avatar alt="DiscoveryHub" src="https://wasabi.i3s.unice.fr/img/discoveryhub_icon.png" /></a></li>
                                    <li><a href={artistInfo.urlWikia} target="_blank" rel="noopener noreferrer"><Avatar alt="LyricsWikia" src="https://wasabi.i3s.unice.fr/img/lyricswikia_icon.svg" /></a></li> 
                                 </ul>
                            </div>
                            <h2>{artistInfo.name}</h2>
                        </div>
                        <div className="artist-info-container">
                            <div className="img-container">
                                <img src={artistInfo.picture?.medium} alt="artist" />   
                            </div>
                            <div className="artist-resume">
                            <p>{artistInfo.abstract}</p>
                            </div>
                            <div className="artist-info">
                                <List>
                                    {
                                        artistInfo.gender && (
                                            <React.Fragment>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <PersonIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText className="artist-info-text" primary="Gender" secondary={artistInfo.gender} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </React.Fragment>
                                        )    
                                    }

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <AmpStoriesIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText className="artist-info-text"  primary="Type" secondary={artistInfo.type} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <LanguageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText className="artist-info-text" primary="Location" secondary={artistInfo.location?.city+" ,"+artistInfo.location?.country} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PeopleIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText className="artist-info-text"  primary="Deezer Fan" secondary={artistInfo.deezerFans} />
                                    </ListItem>
                                    {
                                        (artistInfo.members && artistInfo.members.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Members (" + artistInfo.members.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.members.map((member,index) => {
                                                            return(
                                                                <Chip label={member.name+" ("+member.instruments[0]+")"} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )    
                                    }

                                    
                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.genres && artistInfo.genres.length > 0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Genres (" + artistInfo.genres.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.genres.map((value, index) => {
                                                            return (
                                                                <Chip label={value} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )
                                    }

                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.associatedMusicalArtist && artistInfo.associatedMusicalArtist.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Associated Musical Artist (" + artistInfo.associatedMusicalArtist.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.associatedMusicalArtist.map((value,index) => {
                                                            return(
                                                                <Chip label={value} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )    
                                    }
                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.subject && artistInfo.subject.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Subject (" + artistInfo.subject.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.subject.map((value,index) => {
                                                            return(
                                                                <Chip label={value} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )    
                                    }

                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.recordLabel && artistInfo.recordLabel.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Record Label (" + artistInfo.recordLabel.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.recordLabel.map((value,index) => {
                                                            return(
                                                                <Chip label={value} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )    
                                    }

                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.nameVariations_fold && artistInfo.nameVariations_fold.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Name Variation (" + artistInfo.nameVariations_fold.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.nameVariations_fold.map((value,index) => {
                                                            return(
                                                                <Chip label={value} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )    
                                    }

                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.labels && artistInfo.labels.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Labels (" + artistInfo.labels.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    {
                                                        artistInfo.labels.map((value,index) => {
                                                            return(
                                                                <Chip label={value} key={index} className="multilist-info__chip" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                
                                                <Divider variant="inset" component="li" />
                                            </div>
                                        )    
                                    }

                                    <Divider variant="inset" component="li" />
                                    {
                                        (artistInfo.urls && artistInfo.urls.length>0) && (
                                            <div>
                                                <div className="multilist-info">
                                                    <span>{"Urls (" + artistInfo.urls.length + ") :"} </span>
                                                </div>
                                                <div className="multilist-info__chips">
                                                    <ul>
                                                        {
                                                            artistInfo.urls.map((value,index) => {
                                                                return(
                                                                    <li key={index}><a href={value}  target="_blank" rel="noopener noreferrer" >{value}</a></li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        )    
                                    }

                                    
                                </List>
                            </div>
                            
                        </div>
                    </CardContent>
                </ Card>
                
            </div>
        )
    }