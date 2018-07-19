import React, { Component } from 'react';
import MapView from '../components/Map/MapView';
import Navbar from '../components/Navigation/Navbar/Navbar';
import SideBar from '../components/Navigation/Sidebar/Sidebar';
import { connect } from 'react-redux';
import { sidedrawerOpen } from '../actions/uiAction';

class MainMap extends Component {
    state = {
        nestedSideDrawerOpen: false
    }

    componentDidMount() {
    }

    drawerToggleClickHandler = () => {
        this.props.sidedrawerOpen();
    };

    render() {
        return (
            <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideBar />
                <MapView lat="-33.435979" lng="-70.596415" zoom="16" />
            </React.Fragment>
        );
    }
}

export default connect(null, { sidedrawerOpen })(MainMap);