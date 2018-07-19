import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchHomePatrols } from '../../../../actions/dataAction';

class NestedListItems extends Component {

    componentWillMount() {
        console.log(this.props)
        this.props.fetchHomePatrols()
    }
    componentDidMount() {
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
    items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    items: state.patrols.homePatrols
});

export default connect(mapStateToProps, { fetchHomePatrols })(NestedListItems);