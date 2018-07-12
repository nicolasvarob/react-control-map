import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton';

const navbar = props => (
    <header>
        <nav>
            <div></div>
            <div>
                <ul>
                    <li>
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;