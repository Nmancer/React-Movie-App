import React from "react";
import styled, { keyframes } from "styled-components";
import { AccentColor } from "../../helpers/Theming";
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  margin: 100px 0 50px 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const Dot = styled.div`
  background-color: ${AccentColor};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
const Loader = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};

export default Loader;
