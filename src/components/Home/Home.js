    import React, { Component } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import TabPanel from '../Util/TabPanel'
import { Link } from 'react-router-dom';
import { get } from '../../util/util';
import metallica from "../../data/mettalica";
import Artist from './Artist/Artist';
import Albums from './Albums/Albums';
import Song from './Song/Song';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist : metallica,
            value : 0,
            currentAlbum : null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        get('https://wasabi.i3s.unice.fr/search/more/Metallica').then(response=>{
        })
    }
    seeSong(event,album){
                console.log("itooooooo   ",this);
               this.setState({currentAlbum : album });
                this.handleChange(event,2);
    }
    handleChange(event, newValue) {
        this.setState({value:newValue});
    }

    render() {
        const {value} = this.state;
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
                        <Artist {...this.state.artist}
                        ></Artist>
                        <Link to="/detail/id">Go to detail</Link>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Albums albums={this.state.artist.albums} clicked={(event)=>this.seeSong(event,this.state.artist.albums[0])}></Albums>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Song album={this.state.currentAlbum} ></Song>
                    </TabPanel>
                </Paper>
            </div>
        )
    }
}
