import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryColor, AccentColor } from "../../helpers/Theming";
import CarouselPlaceHolder from "./Placeholders/CarouselPlaceHolder";
const Carousel = props => {
  return (
    <>
      {props.movies ? (
        <CarouselOuterWrapper>
          <CarouselInnerWrapper>
            <InfiniteCarousel
              breakpoints={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0}
              slidesToScroll={3}
              slidesToShow={3}
              scrollOnDevice={true}
            >
              {props.movies.map(movie => (
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
            </InfiniteCarousel>
          </CarouselInnerWrapper>
        </CarouselOuterWrapper>
      ) : (
        <PlaceholderWrapper>
          <CarouselPlaceHolder />
          <CarouselPlaceHolder />
          <CarouselPlaceHolder />
        </PlaceholderWrapper>
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

const CarouselOuterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${PrimaryColor};
`;
const PlaceholderWrapper = styled.div`
  display: flex;
  width: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
  background-color: ${PrimaryColor};
`;
const CarouselInnerWrapper = styled(CarouselOuterWrapper)`
  width: 100%;
  padding: 10px;
`;

const CarouselItemWrapper = styled.div`
  max-height: 500px;
  margin: 0 auto;
  position: relative;
  background: none;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;
  }
`;

const CarouselInfo = styled.div`
  color: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 720px) {
    display: none;
  }
`;

export default Carousel;
