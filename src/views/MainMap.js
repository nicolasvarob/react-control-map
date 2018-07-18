import React, { Component } from 'react';
import MapView from '../components/Map/MapView';
import SideDrawer from '../components/Navigation/Sidebar/SideDrawer';
import NestedSideDrawer from '../components/Navigation/Sidebar/NestedSideDrawer';
import Navbar from '../components/Navigation/Navbar/Navbar';
import SideBar from '../components/Navigation/Sidebar/Sidebar';
import { connect } from 'react-redux';
import { sidedrawerOpen } from '../actions/uiAction';

class MainMap extends Component {
    state = {
        sideDrawerOpen: false,
        nestedSideDrawerOpen: false
    }

    componentDidMount(){
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
        this.props.sidedrawerOpen();
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

export default connect(null, { sidedrawerOpen })(MainMap);