import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SecondaryColor } from "../../helpers/Theming";
import MovieCard from "./MovieCard";
const RenderMovies = props => {
  const movies = props.movies;
  return (
    <MovieCardsWrapper>
      <MoviesHeading>
        <h1>{props.page ? props.page : "Latest"} Movies</h1>
        {props.total ? <h1>{props.total} total</h1> : null}
      </MoviesHeading>

      {props.fetching ? (
        <MovieCards>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
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
  width: 70%;
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

export default RenderMovies;
