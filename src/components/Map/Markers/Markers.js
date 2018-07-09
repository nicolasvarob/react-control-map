import React, { Component } from 'react';
import firebase from '../../../firebase';
import Marker from './Marker';


class Markers extends Component {
    state = {
        markers: []
    }

    //Pinta marcadores en mapa
    _getHomes = (data) => {

        const homes = data.val();
        Object.keys(homes).map(key => {
            const single = homes[key];

            const marker = {
                homeId: key,
                lat: single.lat,
                //Cambiar a lng
                lng: single.lng,
                status: single.status,
                address: single.address
            }

            const prevItem = this.state.markers.find(function (item, id) {
                item.id = id;
                return item.homeId === key;
            });

            //Checkea si existe item previo, si no, crea uno nuevo
            if (prevItem === undefined) {
                this.setState(function (prevState) {
                    return {
                        markers: [...prevState.markers, marker]
                    }
                });
            } else {
                //Chequea si el status es igual
                if (prevItem.status === marker.status) {
                    return false;
                } else {
                    const allMarkers = this.state.markers;
                    allMarkers[prevItem.id].status = marker.status
                    this.setState({markers: allMarkers});
                }
            }

            return true;
        });
    }

    _errData = (err) => {
        console.log('error');
        console.log(err);
    }

    componentDidMount() {
        const database = firebase.database();
        const homesRef = database.ref('homes');
        homesRef.on('value', this._getHomes, this._errData);
    }

    componentDidUpdate(prevProps) {
    }

    render() {

        if (!this.state.error) {
            return this.state.markers.map(marker => {
                //Convierte timestamp a date con función
                const key = marker.homeId;
                const lat = marker.lat;
                const lng = marker.lng;
                const status = marker.status;
                const address = marker.address;

                /* const prevItem = this.state.markers.filter(function(item){
                    return item.homeId === key;
                });


                if(prevItem[0].estado ===){

                } */


                return (
                    <Marker key={key} lat={lat} lng={lng} homeId={key} status={status} mymap={this.props.mymap} address={address} />
                );
            });
        }
        else {
            return (
                <div>Error</div>
            );
        }


    }
}

export default Markers;