import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchHomePatrols } from '../../../../actions/dataAction';
import { selectedMarker } from '../../../../actions/markerAction';

class NestedListItems extends Component {


    componentDidUpdate(prevProps,prevState) {
        if(this.props.selectedMarkerId == null) return;
        if(prevProps.selectedMarkerId === this.props.selectedMarkerId){
            return;
        }
        else{
            return this.props.fetchHomePatrols(this.props.selectedMarkerId);
        }
    }

    render() {
        //TODO
        //Arreglar render de item list
        let items = this.props.items;
        let itemList = [];
        if (items) {
            itemList = items.map(item => {
                return <ListItem key={item.key} address={this.props.selectedMarkerAddress} timestamp={item.timestamp} status={item.status} />
            });
        }
        else {
            itemList = "loading";
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