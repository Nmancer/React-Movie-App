import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryColor, AccentColor } from "../../helpers/Theming";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/arrows.css";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true
};

const Carousel = ({ movies }) => {
  return (
    <>
      {movies && movies.results && (
        <Slider {...settings}>
          {movies.results.slice(0, 5).map(movie => (
            <CarouselItemWrapper key={movie.id}>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/original${
                  movie.backdrop_path
                }`}
              />
              <CarouselInfo>
                <h1>{movie.title}</h1>
                <p>
                  {movie.overview.length > 150
                    ? movie.overview.slice(0, 150) + "..."
                    : movie.overview}
                </p>
                <ReadMore to={`/movies/${movie.id}`}>Read More!</ReadMore>
              </CarouselInfo>
            </CarouselItemWrapper>
          ))}
        </Slider>
      )}
    </>
  );
};

const ReadMore = styled(Link)`
  color: #fff;
  margin: 15px 0 10px 20px;
  padding: 9px;
  width: 105px;
  background-color: none;
  border: 2px solid ${AccentColor};
  :hover {
    background-color: ${AccentColor};
  }
  transition: 0.5s;
`;

const CarouselItemWrapper = styled.div`
  max-height: 550px;
  margin: 0 auto;
  position: relative;
  background: ${PrimaryColor};

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;
    margin: 0 auto;
  }
`;

const CarouselInfo = styled.div`
  color: #fff;
  position: absolute;
  bottom: 0px;
  left: 200px;
  height: 150px;
  width: 500px;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 1280px) {
    bottom: 0px;
    left: 0px;
  }
`;

export default Carousel;
