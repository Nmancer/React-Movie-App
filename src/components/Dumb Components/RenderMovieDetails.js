import React from "react";

import ActorsCard from "./ActorsCard";
import RenderMovies from "./RenderMovies";
import styled from "styled-components";
import { AccentColor } from "../../helpers/Theming";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const RenderMovieDetails = props => {
  const details = props.details;
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    credits,
    release_date,
    production_companies,
    recommendations,
    runtime,
    tagline,
    vote_average,
    revenue
  } = details;

  return (
    <MovieDetails>
      <React.Fragment>
        <MovieCardWrapper
          bg={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        >
          <MovieCard>
            <MoviePoster>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : require("../../Images/notFoundActor.png")
                }
                alt=""
              />
            </MoviePoster>
            <MovieInfo>
              <MovieHeadingBigColored>{title}</MovieHeadingBigColored>
              <MovieHeadingBig>{tagline}</MovieHeadingBig>
              <MovieHeadingBig>
                {genres
                  ? genres.map(genre => {
                      return genre.name + " ";
                    })
                  : null}
              </MovieHeadingBig>
              <MovieInfoFadedText> {overview}</MovieInfoFadedText>
              <MovieHeadingMedium>
                <MovieInfoFadedText>Date: </MovieInfoFadedText>
                {release_date}
              </MovieHeadingMedium>
              <MovieHeadingMedium>
                <MovieInfoFadedText>Runtime: </MovieInfoFadedText> {runtime}{" "}
                mins
              </MovieHeadingMedium>
              <MovieHeadingMedium>
                <MovieInfoFadedText>Studio: </MovieInfoFadedText>
                {production_companies && production_companies[0]
                  ? production_companies[0].name
                  : null}
              </MovieHeadingMedium>
              <MovieHeadingMedium>
                <MovieInfoFadedText>Director: </MovieInfoFadedText>
                {credits && credits.crew[0] ? credits.crew[0].name : null}
              </MovieHeadingMedium>
              <MovieHeadingMedium>
                <MovieInfoFadedText>Rating: </MovieInfoFadedText>
                {vote_average}
              </MovieHeadingMedium>
              <MovieHeadingMedium>
                <MovieInfoFadedText>Revenue: </MovieInfoFadedText>
                {formatter.format(revenue)}
              </MovieHeadingMedium>
            </MovieInfo>
          </MovieCard>
        </MovieCardWrapper>
      </React.Fragment>
      <React.Fragment>
        <ActorsCard credits={credits} />

        {recommendations ? (
          <RenderMovies page="Similar" movies={recommendations.results} />
        ) : null}
      </React.Fragment>
    </MovieDetails>
  );
};
const MoviePoster = styled.div`
  img {
    border-radius: 5px;
    margin: 20px 20px 0 0;
  }
`;
const MovieDetails = styled.div`
  margin-top: 90px;
`;
const MovieCard = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 1000px;
  }
`;
const MovieCardWrapper = styled.div`
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.849);
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  background-image: ${props => `url(${props.bg})`};
`;
const MovieHeadingBig = styled.h2`
  color: white;
`;
const MovieHeadingBigColored = styled(MovieHeadingBig)`
  color: ${AccentColor};
`;
const MovieHeadingMedium = styled.h4`
  font-weight: normal;
  font-size: 16px;
`;
const MovieInfo = styled.div`
  margin-top: 20px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
`;
const MovieInfoFadedText = styled.span`
  font-weight: normal;
  color: #d8d5d5;
  font-size: 16px;
`;
export default RenderMovieDetails;
