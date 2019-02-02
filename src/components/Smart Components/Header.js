import React from "react";
import Search from "./Search";
import { NavLink, Link } from "react-router-dom";
import { FaPalette } from "react-icons/fa";
import { withRouter } from "react-router";
import styled from "styled-components";
import { changeTheme, changeAccent } from "../../actions";
import { connect } from "react-redux";
import {
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
  AccentColor
} from "../../helpers/Theming";

class Header extends React.Component {
  render() {
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
          <HeaderItem>
            <Search />

            <ThemingWrapper>
              <SwitchTheme onClick={this.props.changeTheme} />
              <Circle
                color="#f03434"
                onClick={() => this.props.changeAccent("red")}
              />
              <Circle
                color="#2ecc71"
                onClick={() => this.props.changeAccent("green")}
              />
              <Circle
                color="#a537fd"
                onClick={() => this.props.changeAccent("blue")}
              />
            </ThemingWrapper>
          </HeaderItem>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

const SwitchTheme = styled(FaPalette)`
  color: ${TertiaryColor};
  font-size: 22px;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
`;
const HeaderWrapper = styled.div`
  height: 90px;
  background-color: ${PrimaryColor};
  justify-content: center;
  display: flex;
  position: sticky;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  @media (max-width: 520px) {
    height: 150px;
  }
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 60%;
  height: 90px;
  top: 0;
  position: fixed;
  z-index: 6;
  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 520px) {
    height: 150px;
    justify-content: center;
  }
`;
const HeaderItem = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  @media (max-width: 1280px) {
    margin-right: 15px;
  }

  @media (max-width: 520px) {
    flex-direction: column-reverse;
  }
`;
const HeaderNav = styled(NavLink)`
  margin-left: 30px;
  color: ${SecondaryColor};
  :hover,
  &.active {
    color: ${AccentColor};
    border-bottom: 3px solid ${AccentColor};
    padding-bottom: 30px;
    margin-top: 33px;
  }

  @media (max-width: 960px) {
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
  @media (max-width: 780px) {
    display: none;
  }
`;

const ThemingWrapper = styled.div`
  padding: 5px;
  display: flex;
  @media (max-width: 520px) {
    margin-bottom: 20px;
    margin-left: 160px;
  }
`;
const Circle = styled.span`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin: 3px;
  background-color: ${props => props.color};
  :hover {
    cursor: pointer;
  }
`;
const mapStateToProps = state => {
  return { theme: state.changeTheme, accent: state.accentColor };
};
export default withRouter(
  connect(
    mapStateToProps,
    { changeTheme, changeAccent }
  )(Header)
);
