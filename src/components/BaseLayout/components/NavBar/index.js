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

      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Icon medium></Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
