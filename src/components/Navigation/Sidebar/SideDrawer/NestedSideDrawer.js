import React from 'react';
import NestedListItems from '../ListItems/NestedListItems';
import './NestedSideDrawer.css';

const nestedSideDrawer = (props) => {
    let drawerClasses = 'nested-side-drawer';
    if (props.visible){
        drawerClasses = 'nested-side-drawer open';
    }
    return (
        <div id="nested-side-drawer" className={drawerClasses}>
            <NestedListItems />
        </div>
    );
};

export default nestedSideDrawer;