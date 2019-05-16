import React from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryColor, AccentColor } from "../../helpers/Theming";
import formatGenres from "../../helpers/formatGenres";

import Slider from "react-slick";
import { SliderArrowRight, SliderArrowLeft } from "./styles/SliderArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/arrows.css";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  prevArrow: <SliderArrowLeft to="prev" />,
  nextArrow: <SliderArrowRight to="next" />
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
                <MovieInfo>
                  <p>{formatGenres(movie.genre_ids)}</p>
                  <p>
                    {movie.release_date ? movie.release_date.slice(0, 4) : null}
                  </p>
                </MovieInfo>
                <h1>{movie.title}</h1>

                <p>
                  {movie.overview.length > 150
                    ? movie.overview.slice(0, 150) + "..."
                    : movie.overview}
                </p>
                <ReadMore to={`/movies/${movie.id}`} as={Link}>
                  <span>
                    <FaPlay />
                  </span>
                  Read More
                </ReadMore>
              </CarouselInfo>
            </CarouselItemWrapper>
          ))}
        </Slider>
      )}
    </>
  );
};

const ReadMore = styled(Link)`
  span {
    font-size: 16px;
    margin-right: 8px;
  }
  font-size: 18px;
  color: #fff;
  margin: 15px 0 10px 20px;
  padding: 7px;
  width: 190px;
  height: 40px;
  text-align: center;
  background-color: red;
  border-radius: 20px;

  background-color: ${AccentColor};

  transition: 0.5s;
`;
const MovieInfo = styled.div`
  display: flex;
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
  bottom: 50px;
  left: 150px;
  h1 {
    font-size: 28px;
    color: ${AccentColor};
  }
  p,
  h1 {
    margin: 10px;
  }

  width: 500px;

  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 1280px) {
    bottom: 0px;
    left: 0px;
  }
`;

export default Carousel;
