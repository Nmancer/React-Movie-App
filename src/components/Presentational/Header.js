import React from "react";
import Search from "../Container/Search";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderItem>
          <HeaderLogo exact={true} to="/">
            Made with TMDB
          </HeaderLogo>
        </HeaderItem>
        <HeaderItemMiddle>
          {" "}
          <Search />
        </HeaderItemMiddle>

        <HeaderItemRight>
          <HeaderNav to="/top">TOP RATED</HeaderNav>
          <HeaderNav to="/popular">POPULAR</HeaderNav>
          <HeaderNav to="/upcoming">UPCOMING</HeaderNav>
          <HeaderNav to="/filter">FILTER</HeaderNav>
        </HeaderItemRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 70px;
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
    width: 85%;
  }

  @media (max-width: 560px) {
    justify-content: flex-end;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderItemRight = styled(HeaderItem)``;
const HeaderItemMiddle = styled(HeaderItem)`
  @media (max-width: 960px) {
    display: none;
  }
`;

const HeaderNav = styled(NavLink)`
  margin-left: 30px;
  color: ${SecondaryColor};

  &.active {
    color: ${AccentColor};
  }
  &.active::after {
    width: 100%;
  }
  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${AccentColor};
    transition: width 0.3s;
  }
  :hover::after {
    width: 100%;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;
const HeaderLogo = styled(Link)`
  font-size: 27px;
  font-weight: bold;
  background: ${AccentColor};
  padding: 5px;
  color: ${PrimaryColor};
  :hover {
    transform: scale(1.1);
    color: ${PrimaryColor};
  }
  transition: all 0.5s;
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

export default withRouter(Header);
