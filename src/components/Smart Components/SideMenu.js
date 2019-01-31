import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Burger.css";
import { FaFilter } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
class SideMenu extends React.Component {
  render() {
    return (
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        noOverlay={true}
        width={"220px"}
      >
        <NavLink to="/" className="menu-item">
          <img
            src={require("../../Images/logo.png")}
            alt="logo"
            className="burger-logo"
          />
        </NavLink>

        <NavLink to="/top" className="menu-item">
          <FaRegHeart />
          TOP RATED
        </NavLink>
        <NavLink to="/popular" className="menu-item">
          <FaFire />
          POPULAR
        </NavLink>
        <NavLink to="/upcoming" className="menu-item">
          <FaCalendarAlt /> UPCOMING
        </NavLink>
        <NavLink to="/filter" className="menu-item">
          <FaFilter />
          FILTER
        </NavLink>
      </Menu>
    );
  }
}

export default SideMenu;
