import ContentLoader from "react-content-loader";
import React from "react";
const ActorDetailsPlaceHolder = props => (
  <ContentLoader
    height={270}
    width={1000}
    speed={2}
    primaryColor="gray"
    secondaryColor="white"
    {...props}
  >
    <rect x="22" y="0" rx="5" ry="5" width="190" height="265" />
    <rect x="224" y="10" rx="3" ry="3" width="180" height="9.4" />
    <rect x="224" y="25" rx="3" ry="3" width="240" height="8.4" />
    <rect x="224" y="50" rx="3" ry="3" width="700" height="7.4" />
    <rect x="224" y="65" rx="3" ry="3" width="750" height="7.4" />
    <rect x="224" y="80" rx="3" ry="3" width="730" height="7.4" />
    <rect x="224" y="95" rx="3" ry="3" width="800" height="7.4" />
  </ContentLoader>
);

export default ActorDetailsPlaceHolder;
