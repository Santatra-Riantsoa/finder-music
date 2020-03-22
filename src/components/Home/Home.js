import { Card, CardContent, Tab, Tabs } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { get } from '../../util/util';
import Detail from '../Detail/Detail';
import TabPanel from '../Util/TabPanel';
import Album from './Album/Album';
import Song from './Song/Song';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            currentAlbum: null,
            artist: this.props.art,
        }
        this.id = this.props.match?.params?.id;
        this.homeRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getDetailFromServer();
    }

    getDetailFromServer() {
        if(this.id) {
            get("https://wasabi.i3s.unice.fr/api/v1/artist/id/"+this.id).then((result) => {
                this.setState({artist:result});
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    seeSong(event, album) {
        this.setState({ currentAlbum: album });
        this.handleChange(event, 2);
    }
    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }
    displayAlbumsContent() {
        if (this.props.art != null) {
            const albumsPlaceHolder = this.props.art.albums?.map((one, index) => (
                <Album key={index} album={one} clicked={(event) => this.seeSong(event, one)} />
            ));
            return albumsPlaceHolder;
        }

    }
    render() {
        const { value } = this.state;
        const defaulAlbum = this.state.currentAlbum ? this.state.currentAlbum : this.props.art.albums[0];
        return (
            <div>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    className="TabContainer"
                >
                    <Tab label="Artist" className="Tab"/>
                    <Tab label="Album" className="Tab" />
                    <Tab label="Songs" className="Tab" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Detail artist={this.props.art} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container>
                    <Card className="card">
                        <CardContent className="card-content">
                            {this.displayAlbumsContent()}
                        </CardContent>
                    </Card>
                        
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Card className="card">
                        <CardContent className="card-content">
                            <Song album={defaulAlbum} ></Song>
                        </CardContent>
                    </Card>
                    
                </TabPanel>
            </div>
        )
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
