import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import MovieCardPlaceHolder from "./Placeholders/MovieCardPlaceHolder";
import BigHeading from "./styles/BigHeading";
const dummyArray = [];
dummyArray.length = 20;
dummyArray.fill(0);

const RenderMovies = ({ movies, page, initialLoad }) => {
  return (
    <MovieCardsWrapper>
      <MoviesHeading>
        <h1>{page ? page : "Latest"} Movies</h1>
      </MoviesHeading>

      {initialLoad ? (
        <MovieCards>
          {dummyArray.map((e, i) => {
            return (
              <PlaceholderWrapper key={i}>
                <MovieCardPlaceHolder />
              </PlaceholderWrapper>
            );
          })}
        </MovieCards>
      ) : (
        <MovieCards>
          {movies.map(movie => {
            return (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            );
          })}
        </MovieCards>
      )}
    </MovieCardsWrapper>
  );
};

const MovieCardsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;
const MoviesHeading = styled(BigHeading)`
  width: 85%;
`;
const MovieCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlaceholderWrapper = styled.div`
  width: 260px;
  margin: 16px;
`;

export default RenderMovies;
