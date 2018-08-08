import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchHomePatrols } from '../../../../actions/dataAction';
import { selectedMarker } from '../../../../actions/markerAction';

class NestedListItems extends Component {
    constructor() {
        super();
        this.state = {
            currentAddress: null,
            currentItems: []
        }
    }


    componentDidUpdate(prevProps, prevState) {
        //Deja almacenado la última address seleccionada
        //Evaluar si traspasar a redux
        if (this.props.selectedMarkerAddress && this.state.currentAddress !== this.props.selectedMarkerAddress) {
            this.setState({ currentAddress: this.props.selectedMarkerAddress })
        }
        if (this.props.selectedMarkerId == null) return;
        if (prevProps.selectedMarkerId === this.props.selectedMarkerId) {
            return;
        }
        else {
            return this.props.fetchHomePatrols(this.props.selectedMarkerId);
        }
    }

    render() {
        let items = this.props.items;
        let itemList;
        if (items) {
            itemList = items.map(item => {
                return <ListItem key={item.key} address={this.state.currentAddress} timestamp={item.timestamp} status={item.status} />
            });
        }
        return (
            <div>
                <ul>
                    <li><h2>Título 2</h2></li>
                </ul>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }
}

NestedListItems.propTypes = {
    fetchHomePatrols: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    selectedMarkerId: PropTypes.string,
    selectedMarkerAddress: PropTypes.string
};

const mapStateToProps = state => {
    return {
        items: state.patrols.homePatrols,
        selectedMarkerId: state.markers.selectedMarker,
        selectedMarkerAddress: state.markers.selectedMarkerAddress
    }
}

export default connect(mapStateToProps, { fetchHomePatrols, selectedMarker })(NestedListItems);