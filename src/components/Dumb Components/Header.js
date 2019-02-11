import React from "react";
import Search from "../Smart Components/Search";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";
import ThemeChanger from "./ThemeChanger";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";
const Header = ({ changeAccent, changeMode }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderItem>
          <HeaderLogo exact={true} to="/">
            Made with TMDB
          </HeaderLogo>
          <HeaderNav to="/top">TOP RATED</HeaderNav>
          <HeaderNav to="/popular">POPULAR</HeaderNav>
          <HeaderNav to="/upcoming">UPCOMING</HeaderNav>
          <HeaderNav to="/filter">FILTER</HeaderNav>
        </HeaderItem>
        <HeaderItemRight>
          <Search />
          <ThemeChanger changeMode={changeMode} changeAccent={changeAccent} />
        </HeaderItemRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 90px;
  background-color: ${PrimaryColor};
  justify-content: center;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  font-size: 14px;
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 70%;

  z-index: 6;
  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderItemRight = styled(HeaderItem)`
  @media (max-width: 960px) {
    display: none;
  }
`;

const HeaderNav = styled(NavLink)`
  margin-left: 30px;
  color: ${SecondaryColor};
  :hover {
    color: ${AccentColor};
    border-bottom: 3px solid ${AccentColor};
  }
  &.active {
    color: ${AccentColor};
  }
  @media (max-width: 780px) {
    display: none;
  }
  transition: all 0.5s;
`;
const HeaderLogo = styled(Link)`
  font-size: 23px;
  font-weight: bold;
  background: ${AccentColor};
  padding: 5px;
  color: ${PrimaryColor};
  :hover {
    transform: scale(1.1);
    color: ${PrimaryColor};
  }
  transition: all 0.5s;
`;

export default withRouter(Header);
