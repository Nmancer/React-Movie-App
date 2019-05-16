import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaFilter,
  FaCalendarAlt,
  FaFire,
  FaRegHeart,
  FaTicketAlt
} from "react-icons/fa";

import { stack as Menu } from "react-burger-menu";
import styled from "styled-components";
import Search from "../Container/Search";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor,
  TertiaryColor
} from "../../helpers/Theming";
import ThemeChanger from "./ThemeChanger";

const SideMenu = ({ changeAccent, changeMode }) => {
  return (
    <StyledBurgerMenu>
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        width={"330px"}
      >
        <BurgerLogo to="/">TMDB</BurgerLogo>
        <NavLink to="/latest">
          <FaTicketAlt /> <span>Latest </span>
        </NavLink>
        <NavLink to="/top">
          <FaRegHeart />
          Top rated
        </NavLink>
        <NavLink to="/popular">
          <FaFire />
          Popular
        </NavLink>
        <NavLink to="/upcoming">
          <FaCalendarAlt /> Upcoming
        </NavLink>
        <NavLink to="/filter">
          <FaFilter />
          Filter
        </NavLink>

        <ThemeChanger changeMode={changeMode} changeAccent={changeAccent} />
        <Search />
      </Menu>
    </StyledBurgerMenu>
  );
};

const BurgerLogo = styled(Link)`
  font-size: 38px;
  font-weight: bold;
  color: ${AccentColor} !important;
  margin-bottom: 20px;
`;

const StyledBurgerMenu = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 25px;
    height: 19px;
    left: 20px;
    top: 25px;
  }

  .bm-burger-bars {
    background: ${TertiaryColor};
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
    margin-right: 8px;
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
