import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItems from '../ListItems/ListItems';
import { sidedrawerOpen } from '../../../../actions/uiAction'
import './SideDrawer.css';

class SideDrawer extends Component {
    componentDidMount() {
    }
    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.visible) {
            drawerClasses = 'side-drawer open';
        }
        return(
            <div id = "side-drawer" className = { drawerClasses } >
                <ListItems />
            </div>
        );
    }
    
};

SideDrawer.propTypes = {
    visible: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    visible: state.uistate.sidedrawerToggle
});

export default connect(mapStateToProps, { sidedrawerOpen })(SideDrawer);