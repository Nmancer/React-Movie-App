import React from "react";
import Search from "../Container/Search";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor,
  TertiaryColor
} from "../../helpers/Theming";
import { IoIosFilm } from "react-icons/io";
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderItem>
          <HeaderLogo exact={true} to="/latest">
            <span>
              <IoIosFilm />
            </span>
            TMDB Movies
          </HeaderLogo>
        </HeaderItem>
        <HeaderItemMiddle>
          <Search />
        </HeaderItemMiddle>

        <HeaderItemRight>
          <HeaderNav to="/latest">Latest</HeaderNav>
          <HeaderNav to="/top">Top rated</HeaderNav>
          <HeaderNav to="/popular">Popular</HeaderNav>
          <HeaderNav to="/upcoming">Upcoming</HeaderNav>
          <HeaderNav to="/filter">Filter</HeaderNav>
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
  font-size: 16px;
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
  @media (max-width: 780px) {
    justify-content: center;
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
  text-transform: uppercase;
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
  font-size: 29px;
  font-weight: bold;

  padding: 5px;
  color: ${TertiaryColor};

  span {
    svg {
      padding: 4px 2px 0px 2px;
    }
  }
  transition: all 0.5s;
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

export default withRouter(Header);
