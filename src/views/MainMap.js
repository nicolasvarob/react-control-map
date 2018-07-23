import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MapView from '../components/Map/MapView';
import Navbar from '../components/Navigation/Navbar/Navbar';
import SideBar from '../components/Navigation/Sidebar/Sidebar';
import { sidedrawerOpen } from '../actions/uiAction';
import { selectedMarker } from '../actions/markerAction';

class MainMap extends Component {

    componentDidMount() {
    }

    drawerToggleClickHandler = () => {
        this.props.sidedrawerOpen();
    };

    render() {
     
        const isSelected = this.props.selectedMarkerId ? true : false;
    
        return (
            <React.Fragment>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideBar markerIsSelected={isSelected} />
                <MapView lat="-33.435979" lng="-70.596415" zoom="16" />
            </React.Fragment>
        );
    }
}

MainMap.propTypes = {
    selectedMarkerId: PropTypes.string
}

const mapStateToProps = state => ({
    selectedMarkerId: state.markers.selectedMarker
});

export default connect(mapStateToProps, { sidedrawerOpen, selectedMarker })(MainMap);