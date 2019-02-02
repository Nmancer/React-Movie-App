import Loadable from "react-loadable";
import React from "react";
import styled, { keyframes } from "styled-components";
function Loading({ error }) {
  if (error) {
    console.log(error);
  } else {
    return (
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    );
  }
}

const SideMenu = Loadable({
  loader: () => import("../components/Dumb Components/SideMenu"),
  loading: Loading
});
const MovieDetails = Loadable({
  loader: () => import("../components/Smart Components/MovieDetails"),
  loading: Loading
});

const SearchPage = Loadable({
  loader: () => import("../components/Smart Components/SearchPage"),
  loading: Loading
});

const ActorDetails = Loadable({
  loader: () => import("../components/Smart Components/ActorDetails"),
  loading: Loading
});

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
export { SideMenu, MovieDetails, SearchPage, ActorDetails };
