import React from "react";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const SliderArrowLeft = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowDropleft color="white" />
    </div>
  );
};
const SliderArrowRight = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowDropright color="white" />
    </div>
  );
};

export { SliderArrowRight, SliderArrowLeft };
