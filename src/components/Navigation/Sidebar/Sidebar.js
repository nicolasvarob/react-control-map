import React from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import NestedSideDrawer from './SideDrawer/NestedSideDrawer';

const sidebar = (props) => {
    return (
        <React.Fragment>
            <SideDrawer />
            <NestedSideDrawer visible={props.markerIsSelected}/>
        </React.Fragment>
    );
};

export default sidebar;