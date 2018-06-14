import React, { Component } from 'react';
import firebase from 'firebase';
class Markers extends Component {
    componentDidMount(){
        const iconDefault;
        const iconOk;

        const defaultMarker = L.icon({
            iconUrl: iconDefault,
            iconSize: [50, 78],
            iconAnchor: [30, 60],
            popupAnchor: [1, -34]
        });
        const statusOkMarker = L.icon({
            iconUrl: iconOk,
            iconSize: [50, 78],
            iconAnchor: [30, 60],
            popupAnchor: [1, -34]
        });

        const database = firebase.database();
    }
    
    render() {

        return (
            <div></div>
        );
    }
}

export default Markers;