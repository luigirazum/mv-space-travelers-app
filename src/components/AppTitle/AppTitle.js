import React from 'react';
import { Link } from 'react-router-dom';
import spaceLogo from '../../assets/imgs/logo/logo_planet.png';
import './AppTitle.css';

const AppTitle = () => (
  <>
    <Link to="/" className="titleLink">
      <div className="logo">
        <img src={spaceLogo} className="logo" alt="space travelers' logo" />
      </div>
      Space Travelers&apos; Hub
    </Link>
  </>
);

export default AppTitle;
