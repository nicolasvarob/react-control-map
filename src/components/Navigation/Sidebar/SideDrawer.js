import React from 'react';
import ListItems from './ListItems/ListItems';
import './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div id="side-drawer">
            <ListItems />
        </div>
    );
};

export default sideDrawer;