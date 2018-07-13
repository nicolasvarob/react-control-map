import React, { Component } from 'react';
import MapView from '../components/Map/MapView';
import SideDrawer from '../components/Navigation/Sidebar/SideDrawer';
import Navbar from '../components/Navigation/Navbar/Navbar';

class MainMap extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };

    render() {
        return (
            <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer visible={this.state.sideDrawerOpen} />
                <MapView lat="-33.435979" lng="-70.596415" zoom="16" />
            </React.Fragment>
        );
    }
}

export default MainMap;