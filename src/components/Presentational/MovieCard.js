import React from "react";
import formatGenres from "../../helpers/formatGenres";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdStar } from "react-icons/md";
import MovieCardPlaceHolder from "./Placeholders/MovieCardPlaceHolder";
import { SecondaryColor, AccentColor } from "../../helpers/Theming";

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
      <MovieOverview>
        {movie.overview.length > 300
          ? movie.overview.slice(0, 300) + " ..."
          : movie.overview}
      </MovieOverview>

      <MovieInfoWrapper>
        <MovieInfo>
          <MovieParagraph>{formatGenres(movie.genre_ids)}</MovieParagraph>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieInfoExtra>
            <MovieParagraph>
              {movie.release_date ? movie.release_date.slice(0, 4) : null}
            </MovieParagraph>
            <MovieInfoExtra>
              <MovieParagraph>{movie.vote_average}</MovieParagraph>
              <IconWrapper>
                <MdStar />
              </IconWrapper>
            </MovieInfoExtra>
          </MovieInfoExtra>
        </MovieInfo>
        <MovieInfo>
          <MovieInfo />
        </MovieInfo>
      </MovieInfoWrapper>
    </MovieCardsItem>
  );
};

const MovieImageWrapper = styled.div`
  img {
    height: auto;
    width: 240px;
    border-radius: 15px;
    margin-bottom: 2px;
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
  margin: 4px 16px 4px 16px;
  width: 240px;
  min-height: 450px;
  max-height: 500px;

  transition: all 0.5s;

  :hover img {
    filter: brightness(35%);
  }
  :hover ${MovieOverview} {
    display: block;
    opacity: 1;
  }
`;
const MovieInfoWrapper = styled.div``;
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieInfoExtra = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MovieParagraph = styled.p`
  font-size: 14px;
  padding: 0px 5px 0px 5px;
  color: ${SecondaryColor};
`;
const IconWrapper = styled.span`
  font-size: 15px;
  color: ${AccentColor};
`;
const MovieTitle = styled.h2`
  color: ${AccentColor};
  font-weight: normal;
  font-size: 16px;
  padding: 4px;
`;

export default MovieCard;
