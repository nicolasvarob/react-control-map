import React, { Component } from 'react';

import L from 'leaflet';
import './MainView.css';

class MapView extends Component {

    componentDidMount() {
        const zoom = this.props.zoom ? this.props.zoom : 16;
        const mymap = L.map('mapid', {
            center: [this.props.lat, this.props.lng],
            zoom: zoom
        });
        const tiles = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29uY2VwdG9yb2JsZWRvIiwiYSI6ImNqZGtkcjJlaTIyY3oycXJsa2l4MHd4YW0ifQ.K9-U1BeaboW5hJJiwklSCw';
        L.tileLayer( tiles, {
            maxZoom: 17,
            minZoom: 13
        }).addTo(mymap);
    }
    render() {
        return (
                <div id="mapid">
                </div>
        );
    }
}

export default MapView;