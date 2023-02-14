import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navData = '1,/,Rockets,navlink+|+2,missions,Missions,navlink+|+3,myprofile,My Profile,navlink';

  const links = navData.split('+|+')
    .map((link) => {
      const [id, path, text, styleClass] = link.split(',');
      return (
        <li key={id}>
          <NavLink to={path} className={styleClass}>
            {text}
          </NavLink>
        </li>
      );
    });

  return (
    <>
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
