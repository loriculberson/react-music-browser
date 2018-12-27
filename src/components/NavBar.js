import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <nav>
        <Link className="home-link" to="/">React Music Browser</Link>
        <Link to="/about">About</Link>
        <Link to='/artists'>Artists</Link>
    </nav>
);

export default NavBar;
