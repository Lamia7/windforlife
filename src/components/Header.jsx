import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.JPG';

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`}>
        <img src={logo} className="" alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
