import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="#home">
        Home
      </a>

      <a className="menu-item" href="#about">
        About Me
      </a>

      <a className="menu-item" href="#portfolio">
			Portfolio
      </a>

      <a className="menu-item" href="#experiences">
			Experiences
      </a>

			<a className="menu-item" href="#contact">
			Contact
      </a>
    </Menu>
  );
};