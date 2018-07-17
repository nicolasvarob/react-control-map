import React from 'react';
import ListItems from './ListItems/ListItems';
import './SideDrawer.css';

const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.visible){
        drawerClasses = 'side-drawer open';
    }
    return (
        <div id="side-drawer" className={drawerClasses}>
            <ListItems />
        </div>
    );
};

export default sideDrawer;