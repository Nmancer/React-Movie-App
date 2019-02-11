import React from "react";
import Genres from "../../helpers/Genres";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";
import PlaceholderMovieCard from "./PlaceholderMovieCard";
const MovieCard = ({ movie }) => {
  return (
    <>
      {movie ? (
        <MovieCardsItem>
          <MovieImageWrapper>
            <LazyLoadImage
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
                  : require("../../Images/notFound.png")
              }
              alt={movie.title}
              effect="blur"
            />
          </MovieImageWrapper>
          <MovieOverview>
            {movie.overview.length > 150
              ? movie.overview.slice(0, 147) + "..."
              : movie.overview}
          </MovieOverview>

          <div>
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieTitle>
                {movie.release_date ? movie.release_date.slice(0, 4) : null}
              </MovieTitle>
            </MovieInfo>
            <MovieInfo>
              <MovieParagraph>
                {movie.genre_ids.slice(0, 3).map(genre => {
                  return Genres.get(genre) + " ";
                })}
              </MovieParagraph>
              <MovieParagraph>{movie.vote_average}</MovieParagraph>
            </MovieInfo>
          </div>
        </MovieCardsItem>
      ) : (
        <PlaceholderMovieCard />
      )}
    </>
  );
};

const MovieImageWrapper = styled.div`
  min-width: 300px;
  min-height: 150px;
  img {
    border-radius: 2px;
    object-fit: contain;
    @media (max-width: 780px) {
      width: 220px;
    }
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
  margin: 10px 6px;
  max-width: 300px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s;
  background-color: ${PrimaryColor};
  :hover img {
    filter: brightness(25%);
  }
  :hover ${MovieOverview} {
    display: block;
    opacity: 1;
  }
  :hover {
    box-shadow: 0 1px 3px ${AccentColor}, 0 1px 2px ${AccentColor};
  }
  @media (max-width: 780px) {
    max-width: 220px;
  }
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

const MovieTitle = styled.h2`
  color: ${AccentColor};
  font-size: 16px;
  font-weight: normal;
  padding: 5px;
`;

export default MovieCard;
