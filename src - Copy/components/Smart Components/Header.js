import React, { Component } from "react";
import "../../Styles/Header.css";
import Search from "./Search";
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__item">
          {" "}
          <Search />
        </div>
      </header>
    );
  }
}
