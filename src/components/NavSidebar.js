import React from 'react';
import me from '../assets/me.jpg';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function NavSidebar() {
  return (
    <div className="sidebars">
      <div className="header">
        <img src={me}></img>
        <h5>slavography</h5>
      </div>
      <ul className="nav-items">
        <li>
          <a href="">example 1</a>
        </li>
        <li>
          <a href="">example 2</a>
        </li>
        <li>
          <a href="">example 3</a>
        </li>
      </ul>
    </div>
  );
}

export default NavSidebar;
