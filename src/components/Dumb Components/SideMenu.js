import React from "react";
import { NavLink, Link } from "react-router-dom";

import { FaFilter } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";
import Search from "../Smart Components/Search";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";
import ThemeChanger from "./ThemeChanger";

const SideMenu = ({ changeAccent, changeMode }) => {
  return (
    <StyledBurgerMenu>
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        noOverlay={true}
        width={"330px"}
      >
        <BurgerLogo to="/">TMDB</BurgerLogo>
        <NavLink to="/top">
          <FaRegHeart />
          TOP RATED
        </NavLink>
        <NavLink to="/popular">
          <FaFire />
          POPULAR
        </NavLink>
        <NavLink to="/upcoming">
          <FaCalendarAlt /> UPCOMING
        </NavLink>
        <NavLink to="/filter">
          <FaFilter />
          FILTER
        </NavLink>

        <Search />

        <ThemeChanger changeMode={changeMode} changeAccent={changeAccent} />
      </Menu>
    </StyledBurgerMenu>
  );
};
const BurgerLogo = styled(Link)`
  font-size: 32px;
  font-weight: bold;

  margin-bottom: 20px;
`;
const StyledBurgerMenu = styled.div`
  .bm-burger-button {
    display: none;
    position: fixed;
    width: 36px;
    height: 30px;
    left: 20px;
    top: 30px;
    @media (max-width: 960px) {
      display: inline-block;
    }
  }

  .bm-burger-bars {
    background: ${SecondaryColor};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${SecondaryColor};
  }

  .bm-menu {
    background: ${PrimaryColor};
    font-size: 1.15em;
    padding: 2.5em 1.5em 0;
    overflow-y: hidden !important;
  }
  .bm-morph-shape {
    fill: ${PrimaryColor};
  }

  .bm-item-list {
    padding-top: 100px;
    display: block;
  }
  .bm-item-list svg {
    margin-right: 1px;
  }
  .bm-item {
    color: ${SecondaryColor};
    padding-left: 85px;
    padding-bottom: 20px;
    width: 100%;
  }
  .bm-item:hover {
    color: ${AccentColor};
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .active {
    color: ${AccentColor};
  }
`;

export default SideMenu;
