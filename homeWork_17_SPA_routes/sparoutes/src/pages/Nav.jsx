import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      
      <Outlet />
    </div>
  );
};

export default Nav;