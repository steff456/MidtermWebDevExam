import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="navbar main-nav flex-stretch-self no-margin">
    <ul className="navbar-nav d-flex justify-content-around">
      <li className="nav-item">
        <NavLink to="#" activeClassName="active">
          Link 1
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="#" activeClassName="active">
          Link 2
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="#" activeClassName="active">
          Link 3
        </NavLink>
      </li>
    </ul>
  </nav>
);
