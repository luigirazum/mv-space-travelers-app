import React from 'react';
import AppTitle from '../AppTitle/AppTitle';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => (
  <>
    <header className="spaceHeader">
      <AppTitle />
      <NavBar />
    </header>
  </>
);

export default Header;
