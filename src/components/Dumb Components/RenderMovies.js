import React from "react";
import { Link } from "react-router-dom";
import Genres from "../../helpers/Genres";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadMoreButton from "./LoadMoreButton";
import styled from "styled-components";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";
const RenderMovies = props => {
  const movies = props.movies;
  return (
    <MovieCardsWrapper>
      <MoviesHeading>
        {movies.length === 0 ? null : (
          <React.Fragment>
            <h1>{props.page ? props.page : "Latest"} Movies</h1>
            {props.total ? <h1>{props.total} total</h1> : null}
          </React.Fragment>
        )}
      </MoviesHeading>

      <MovieCards>
        {movies.map(movie => {
          return (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCardsItem>
                <MovieImageWrapper>
                  <LazyLoadImage
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w300/${
                            movie.backdrop_path
                          }`
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
                <MovieRating>
                  <MovieParagraph>{movie.vote_average}</MovieParagraph>
                </MovieRating>
                <div>
                  <div>
                    <MovieTitle>
                      {movie.title} (
                      {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : null}
                      )
                    </MovieTitle>
                  </div>
                  <div>
                    <MovieParagraph>
                      {movie.genre_ids.slice(0, 3).map(genre => {
                        return Genres.get(genre) + " ";
                      })}
                    </MovieParagraph>
                  </div>
                </div>
              </MovieCardsItem>
            </Link>
          );
        })}
      </MovieCards>
      {props.page === "Similar" ||
      props.page === "Found" ||
      props.page === "Actor" ? null : (
        <LoadMoreButton
          fetchMovies={props.fetchMovies}
          page={props.page}
          resultsPage={props.resultsPage}
          filtering={props.filtering}
        />
      )}
    </MovieCardsWrapper>
  );
};

const MovieCardsWrapper = styled.div`
  width: 70%;
  padding-top: 90px;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;
const MoviesHeading = styled.div`
  margin: 15px 65px 15px 65px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: normal;
    font-size: 20px;
    color: ${SecondaryColor};
  }
`;
const MovieCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
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
  transition: all 0.5s;
  :hover img {
    filter: brightness(25%);
  }
  :hover ${MovieOverview} {
    display: block;
    opacity: 1;
  }
  :hover {
    background-color: ${PrimaryColor};
  }
  @media (max-width: 780px) {
    max-width: 220px;
  }
`;

const MovieParagraph = styled.p`
  font-size: 14px;

  padding: 5px;
  color: ${SecondaryColor};
`;
const MovieRating = styled.div`
  position: absolute;
  right: 0;
  background: #00000077;
  font-size: 15px;
  p {
    color: white;
  }
`;
const MovieTitle = styled.h2`
  color: ${AccentColor};
  font-size: 16px;
  font-weight: normal;
  padding: 5px;
`;

export default RenderMovies;
