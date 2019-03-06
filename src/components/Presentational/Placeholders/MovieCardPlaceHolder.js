import ContentLoader from "react-content-loader";
import React from "react";

const MovieCardPlaceHolder = props => (
  <ContentLoader
    height={460}
    width={260}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="410" rx="4" ry="4" width="185.25" height="13" />
    <rect x="3" y="434" rx="4" ry="4" width="186" height="13" />
    <rect x="205" y="413" rx="4" ry="4" width="50" height="13" />
    <rect x="205" y="435" rx="4" ry="4" width="50" height="13" />
    <rect x="5.11" y="2.55" rx="5" ry="5" width="251.6" height="398.16" />
  </ContentLoader>
);

export default MovieCardPlaceHolder;
