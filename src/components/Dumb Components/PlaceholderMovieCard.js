import React from "react";
import { SecondaryColor } from "../../helpers/Theming";
import styled from "styled-components";
const PlaceholderMovieCard = props => {
  return (
    <PlaceholderWrapper>
      <PlaceholderTop />
      <PlaceholderInfo>
        <PlaceholderText />
        <PlaceholderText />
      </PlaceholderInfo>
    </PlaceholderWrapper>
  );
};
const PlaceholderTop = styled.div`
  width: 300px;
  height: 150px;
  background-color: ${SecondaryColor};
`;
const PlaceholderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const PlaceholderText = styled.div`
  height: 15px;
  margin: 4px;
  background-color: gray;
`;
const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 6px;
  width: 300px;

  border-radius: 2px;
  background-color: gray;
`;
export default PlaceholderMovieCard;
