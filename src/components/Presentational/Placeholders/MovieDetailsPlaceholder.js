import ContentLoader from "react-content-loader";
import React from "react";
const MovieDetailsPlaceholder = props => (
  <ContentLoader
    height={400}
    width={1000}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="240" y="32" rx="4" ry="4" width="220" height="9" />
    <rect x="240" y="54" rx="4" ry="4" width="260" height="9" />
    <rect x="240" y="73" rx="4" ry="4" width="220" height="9" />
    <rect x="240" y="100" rx="4" ry="4" width="525" height="7" />
    <rect x="240" y="115" rx="4" ry="4" width="515" height="7" />
    <rect x="240" y="130" rx="4" ry="4" width="505" height="7" />
    <rect x="240" y="155" rx="4" ry="4" width="142" height="7" />
    <rect x="240" y="170" rx="4" ry="4" width="142" height="7" />
    <rect x="240" y="185" rx="4" ry="4" width="142" height="7" />
    <rect x="240" y="200" rx="4" ry="4" width="142" height="7" />
    <rect x="240" y="215" rx="4" ry="4" width="142" height="7" />

    <rect x="22" y="29" rx="5" ry="5" width="200" height="290" />
  </ContentLoader>
);

export default MovieDetailsPlaceholder;
