import { FaPalette } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { TertiaryColor } from "../../helpers/Theming";
const ThemeChanger = ({ changeMode, changeAccent }) => {
  return (
    <ThemingWrapper>
      <SwitchTheme onClick={changeMode} />
      <Circle color="#f03434" onClick={() => changeAccent("red")} />
      <Circle color="#2ecc71" onClick={() => changeAccent("green")} />
      <Circle color="#a537fd" onClick={() => changeAccent("blue")} />
      <Circle color="#f9690e" onClick={() => changeAccent("orange")} />
    </ThemingWrapper>
  );
};
const ThemingWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
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
const SwitchTheme = styled(FaPalette)`
  color: ${TertiaryColor};
  font-size: 22px;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
`;
export default ThemeChanger;
