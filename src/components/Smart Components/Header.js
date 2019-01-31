import React, { Component } from "react";
import "../../Styles/Header.css";
import Search from "./Search";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="headerWrapper">
        <header className="header">
          <div className="header__item header__item-nav ">
            <NavLink to="/" className="menu-item">
              <img
                src={require("../../Images/logo.png")}
                alt="logo"
                className="header-logo"
              />
            </NavLink>

            <NavLink to="/top" className="header__item-nav">
              TOP RATED
            </NavLink>
            <NavLink to="/popular" className="header__item-nav">
              POPULAR
            </NavLink>
            <NavLink to="/upcoming" className="header__item-nav">
              UPCOMING
            </NavLink>
            <NavLink to="/filter" className="header__item-nav">
              FILTER
            </NavLink>
          </div>
          <div className="header__item">
            {" "}
            <Search />
          </div>
        </header>
      </div>
    );
  }
}
