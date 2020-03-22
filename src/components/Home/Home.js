import React, { Component } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import TabPanel from '../Util/TabPanel'
import { Link } from 'react-router-dom';
import { get } from '../../util/util';
import Artist from './Artist/Artist';
import Album from './Album/Album';
import Song from './Song/Song';
import Grid from '@material-ui/core/Grid';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            currentAlbum: null
        }
        this.homeRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        get('https://wasabi.i3s.unice.fr/search/more/Metallica').then(response => {
        })
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
                <Paper>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Artist" />
                        <Tab label="Album" />
                        <Tab label="Songs" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Artist {...this.props.art}
                        ></Artist>
                        <Link to="/detail/id">Go to detail</Link>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container>
                            {this.displayAlbumsContent()}
                        </Grid>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Song album={defaulAlbum} ></Song>
                    </TabPanel>
                </Paper>
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