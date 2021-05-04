import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GameStyles from '../styles/NavBar.module.css';

const NavBar = () => {
  const isActive = {
    color: '#4addeb',
  };
  return (
    <header className={GameStyles.containerHeader}>
      <div className={GameStyles.containerLogo}>
        <Link to="/" exact className={GameStyles.logo}>
          fgtg
        </Link>
      </div>
      <nav className={GameStyles.contNav}>
        <NavLink
          activeStyle={isActive}
          to="/"
          className={GameStyles.linkHoAb}
          exact
        >
          Home
        </NavLink>
        {' | '}
        <NavLink
          activeStyle={isActive}
          to="/about"
          className={GameStyles.linkHoAb}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
