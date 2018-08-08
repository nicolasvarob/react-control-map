import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton';
import { NavLink } from 'react-router-dom';

const navbar = props => (
    <header>
        <nav>
            <div></div>
            <div>
                <ul>
                    <li>
                        <DrawerToggleButton click={props.drawerClickHandler} />
                    </li>
                    <li>
                        <NavLink to="/reporting">Reportes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;