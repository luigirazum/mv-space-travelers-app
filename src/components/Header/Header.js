import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Header = () => (
  <>
    <header>
      <NavBar />
      <NavLink
        to="myprofile"
        className="navlink"
      >
        My profile
      </NavLink>
    </header>
  </>
);

export default Header;
