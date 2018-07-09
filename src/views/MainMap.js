import React, { Component } from 'react';
import MapView from '../components/Map/MapView';

class MainMap extends Component {
    render() {
        return (
                <MapView lat="-33.435979" lng="-70.596415" zoom="16" />
        );
    }
}

export default MainMap;