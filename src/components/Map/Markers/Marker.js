import React, { Component } from 'react';
import L from 'leaflet';

import { activeMarker,defaultMarker,statusOkMarker } from './allMarkers'

class Marker extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
        this.marker = null;
    }
    

    _onClick = (e) => {
       
        //Cambia el icono dependiendo de la actividad en el click
        //Define si esta activo.
        if (this.state.active) {
            if (this.props.status === "actividad") {
                e.target.setIcon(statusOkMarker);
            }
            else if (this.props.status === "inactividad") {
                e.target.setIcon(defaultMarker);
            }
            else {
                console.log('no esta definido');
                e.target.setIcon(defaultMarker);
            }
            this.setState({ active: false });
        } else {
            e.target.setIcon(activeMarker);
            this.setState({ active: true });
        }
    }

    componentDidMount() {
        //Inicializa los marcadores
        let markerIcon;
        if (this.props.status === "actividad") {
            markerIcon = statusOkMarker;
        }
        else if (this.props.status === "inactividad") {
            markerIcon = defaultMarker;
        }
        else {
            console.log('no esta definido');
            markerIcon = defaultMarker;
        }

        this.marker = L.marker([this.props.lat, this.props.lng], { icon: markerIcon, homeId: this.props.homeId, address: this.props.address });
        //Añade tooltip al marcador
        this.marker.bindTooltip(this.props.address, { direction: 'top', opacity: 1, offset: [-5, -65] });
        //añade onClick al marcador
        this.marker.on('click', this._onClick);
        this.props.mymap.addLayer(this.marker);
    }

    componentDidUpdate(prevProps) {
        const changeStatusMarker = () => {
            if(this.props.status === prevProps.status){
                return false;
            } else {
                if(this.props.status === "actividad"){
                    this.marker = this.marker.setIcon(statusOkMarker);
                }
                else{
                    this.marker = this.marker.setIcon(defaultMarker);                    
                }
                return true;
            }
        }
        changeStatusMarker()
    }

    render() {

        return (
            <React.Fragment />
        );
    }
}

export default Marker;