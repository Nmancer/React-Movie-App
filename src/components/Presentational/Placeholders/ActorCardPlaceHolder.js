import ContentLoader from "react-content-loader";
import React from "react";

const ActorCardPlaceHolder = props => (
  <ContentLoader
    height={280}
    width={154}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="3.69" y="3" rx="4" ry="4" width="144" height="240" />
    <rect x="3.69" y="251.55" rx="4" ry="4" width="144" height="11" />
  </ContentLoader>
);

export default ActorCardPlaceHolder;
