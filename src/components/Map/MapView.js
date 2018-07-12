import React, { Component } from 'react';

import Markers from './Markers/Markers';

import L from 'leaflet';
import './MainView.css';


class MapView extends Component {
    
    state = {
        mymap: null
    }

    componentDidMount() {
        const zoom = this.props.zoom ? this.props.zoom : 16;
        const mymap = L.map('mapid',{zoomControl: true}).setView([this.props.lat, this.props.lng], zoom);
        mymap.zoomControl.setPosition('bottomleft');
        const tiles = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29uY2VwdG9yb2JsZWRvIiwiYSI6ImNqZGtkcjJlaTIyY3oycXJsa2l4MHd4YW0ifQ.K9-U1BeaboW5hJJiwklSCw';
        L.tileLayer(tiles, {
            maxZoom: 17,
            minZoom: 13
        }).addTo(mymap);
        
        this.setState({
            mymap: mymap
        });
    }

    render() {

        const { mymap } = this.state;

        return (
            <div id="mapid">
                <Markers mymap={mymap} />
            </div>
        );
    }
}

export default MapView;