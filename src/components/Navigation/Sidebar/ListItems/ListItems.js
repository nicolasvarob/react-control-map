import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchPatrols } from '../../../../actions/dataAction';

class ListItems extends Component {

    state = {
        items: []
    }
    componentWillMount() {
        this.props.fetchPatrols()
    }
    componentDidMount() {
    }

    render() {
        //TODO 
        //Arreglar multiplicación del estado

        let items = this.props.items;
        items.sort()
        items.slice(0,4);

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
                    <li><h2>Título</h2></li>
                </ul>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.patrols.patrols
});

export default connect(mapStateToProps, { fetchPatrols })(ListItems);