import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="#">
        Home
      </a>

      <a className="menu-item" href="#about">
        About
      </a>

      <a className="menu-item" href="./services">
			Portfolio
      </a>

      <a className="menu-item" href="./contact">
			Experiences
      </a>

			<a className="menu-item" href="./contact">
			Contact
      </a>
    </Menu>
  );
};