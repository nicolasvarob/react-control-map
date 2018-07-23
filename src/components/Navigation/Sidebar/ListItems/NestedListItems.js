import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchHomePatrols } from '../../../../actions/dataAction';
import { selectedMarker } from '../../../../actions/markerAction';

class NestedListItems extends Component {

    componentWillMount() {
    }

    componentDidUpdate() {
        this.props.fetchHomePatrols(this.props.selectedMarkerId);
        console.log(this.props.items);
    }

    render() {
        let items = this.props.items;
        let itemList;
        if (items) {
            itemList = items.map(item => {
                return <ListItem key={item.key} address={item.address} timestamp={item.timestamp} status={item.status} />
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
    selectedMarkerId: PropTypes.string
};

const mapStateToProps = state => ({
    items: state.patrols.homePatrols,
    selectedMarkerId: state.markers.selectedMarker
});

export default connect(mapStateToProps, { fetchHomePatrols, selectedMarker })(NestedListItems);