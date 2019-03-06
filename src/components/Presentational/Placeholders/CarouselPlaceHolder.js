import ContentLoader from "react-content-loader";
import React from "react";

const CarouselPlaceHolder = props => (
  <ContentLoader
    height={340}
    width={650}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="9.11" y="6.04" rx="5" ry="5" width="635.24" height="315.34" />
  </ContentLoader>
);

export default CarouselPlaceHolder;
