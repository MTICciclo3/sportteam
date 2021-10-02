// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/Home">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">Mujeres</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">Hombres</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/children">Niños</NavLink></li>
      </ul>
    </div>
   
  </nav>
);

export default Navbar;
