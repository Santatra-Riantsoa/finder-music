import React, { Component } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import TabPanel from '../Util/TabPanel'
import { Link } from 'react-router-dom';
import { get } from '../../util/util';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        get("https://wasabi.i3s.unice.fr/search/dbinfo").then(response=>{
            console.log(response);
        })
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
                        Artist: link to detail :
                        <Link to="/detail/id">Go to detail</Link>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Album
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Songs
                    </TabPanel>
                </Paper>
            </div>
        )
    }
}
