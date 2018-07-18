import React, { Component } from 'react';
import ListItems from './ListItems/ListItems';
import './SideDrawer.css';
import { sidedrawerOpen } from '../../../actions/uiAction'
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
    visible: state.uistate.visible
});

export default connect(mapStateToProps, { sidedrawerOpen })(SideDrawer);