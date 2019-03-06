import React from "react";
import Genres from "../../helpers/Genres";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdStar } from "react-icons/md";
import MovieCardPlaceHolder from "./Placeholders/MovieCardPlaceHolder";
import {
  QuaternaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";

const MovieCard = ({ movie }) => {
  return (
    <MovieCardsItem>
      <MovieImageWrapper>
        <LazyLoadImage
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : require("../../Images/notFound.png")
          }
          alt={movie.title}
          effect="blur"
          placeholder={<MovieCardPlaceHolder />}
        />
      </MovieImageWrapper>
      <MovieOverview>{movie.overview}</MovieOverview>

      <MovieInfoWrapper>
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieParagraph>
            {movie.release_date ? movie.release_date.slice(0, 4) : null}
          </MovieParagraph>
        </MovieInfo>
        <MovieInfo>
          <MovieParagraph>
            {movie.genre_ids.slice(0, 3).map(genre => {
              return Genres.get(genre) + " ";
            })}
          </MovieParagraph>
          <MovieInfo>
            <IconWrapper>
              <MdStar />
            </IconWrapper>
            <MovieParagraph>{movie.vote_average}</MovieParagraph>
          </MovieInfo>
        </MovieInfo>
      </MovieInfoWrapper>
    </MovieCardsItem>
  );
};

const MovieImageWrapper = styled.div`
  background-color: #f3f3f3;

  background-color: ${QuaternaryColor};
  img {
    height: auto;
    width: 260px;
  }
`;
const MovieOverview = styled.div`
  margin: 15px;
  position: absolute;
  top: 0px;
  opacity: 0;
  display: none;
  color: white;
  font-size: 14px;
`;
const MovieCardsItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px;
  width: 260px;
  min-height: 450px;
  max-height: 500px;
  background-color: ${QuaternaryColor};
  transition: all 0.5s;

  :hover img {
    filter: brightness(35%);
  }
  :hover ${MovieOverview} {
    display: block;
    opacity: 1;
  }
`;
const MovieInfoWrapper = styled.div`
  margin: 5px;
`;
const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieParagraph = styled.p`
  font-size: 14px;
  padding: 5px;
  color: ${SecondaryColor};
`;
const IconWrapper = styled.span`
  font-size: 16px;
  color: ${AccentColor};
`;
const MovieTitle = styled.h2`
  color: ${AccentColor};
  font-weight: normal;
  font-size: 16px;
  padding: 4px;
`;

export default MovieCard;
