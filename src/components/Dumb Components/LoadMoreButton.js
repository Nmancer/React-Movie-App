import React from "react";
import styled from "styled-components";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";

const LoadMoreButton = props => {
  const { fetchMovies, page, resultsPage, filtering } = props;
  return (
    <LoadMore>
      <Button onClick={() => fetchMovies(page, resultsPage + 1, filtering)}>
        Load More!
      </Button>
    </LoadMore>
  );
};
const LoadMore = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  outline: none;
  padding: 10px 20px;
  color: ${SecondaryColor};
  font-size: 20px;
  background: none;
  border: 2px solid ${AccentColor};
  transition: all 0.5s linear;
  :hover {
    outline: none;
    background: ${AccentColor};
    border: 2px solid ${AccentColor};
    cursor: pointer;
    color: ${PrimaryColor};
  }
`;
export default LoadMoreButton;
