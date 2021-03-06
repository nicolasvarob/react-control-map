import React, { Component } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectedMarker } from '../../../../actions/markerAction';

import { activeMarker, defaultMarker, statusOkMarker } from './allMarkers'

class Marker extends Component {
    constructor() {
        super();
        this.state = {
            selected: false
        }
        this.marker = null;
    }


    _onClick = () => {
        //Cambia el estado del marcador cuando se hace click
        //Si ya esta seleccionado.
        if (this.state.selected) {
            this.props.selectedMarker(null);
            return this.setState({ selected: false });
        }
        //Si no ha sido seleccionado
        else {
            this.props.selectedMarker(this.props.homeId,this.props.address);
            return this.setState({ selected: true });
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

    shouldComponentUpdate(){
        //TODO 
        //SAcar esto mala practica
        if(this.props.selectedMarkerId === this.props.homeId){
            return true;
        }
        else if(this.state.selected){
            return true;
        }
        else{
            return false;
        }
    }

    componentDidUpdate(prevProps) {
        const changeStatusMarker = () => {
            if (this.props.homeId === this.props.selectedMarkerId && this.state.selected) {
                this.marker.setIcon(activeMarker);
            } else {
                if (this.state.selected) this.setState({ selected: false });
                if (this.props.status === prevProps.status && this.state.selected) return //console.log('same status');
                if (this.props.status === "actividad") return this.marker.setIcon(statusOkMarker);
                else if (this.props.status === "inactividad") return this.marker.setIcon(defaultMarker);
                else return this.marker.setIcon(defaultMarker);
            }
        }
        changeStatusMarker();
    }

    render() {
        return (
            <React.Fragment />
        );
    }
}

Marker.propTypes = {
    selectedMarkerId: PropTypes.string
};


const mapStateToProps = state => {
    return ({
        selectedMarkerId: state.markers.selectedMarker
    })
};

export default connect(mapStateToProps, { selectedMarker })(Marker);