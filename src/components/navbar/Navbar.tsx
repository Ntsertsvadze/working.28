import React from 'react';
import { IRoute } from '../router/routes';
import { NavLink, Outlet } from 'react-router-dom';

interface NavbarProps {
  routes: IRoute[];
  isVertical: boolean
}

const Navbar: React.FC<NavbarProps> = ({ routes, isVertical }) => {
  return (
  <>
    <nav className={`navbar ${isVertical ? 'vertical' :'horizontall'}`}>
      {routes.map(({ path, label }) => (
        <NavLink key={path} to={path}>
          {label}
        </NavLink>
      ))}
    </nav>
    <Outlet/>
  </>
  );
};

export default Navbar;
