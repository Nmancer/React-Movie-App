import React from "react";
import styled from "styled-components";
import { AccentColor } from "../../helpers/Theming";

import RenderMovies from "./RenderMovies";
import ActorsCard from "./ActorsCard";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const RenderMovieDetails = props => {
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
  } = props.details;

  return (
    <>
      {props.loading ? (
        <MovieDetails>
          <>
            <MovieCardWrapper>
              <MovieCard>
                <MoviePoster />
                <PlaceholderInfo>
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                  <PlaceholderInfoText />
                </PlaceholderInfo>
              </MovieCard>
            </MovieCardWrapper>
          </>
        </MovieDetails>
      ) : (
        <MovieDetails>
          <>
            <MovieCardWrapper
              bg={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/original${backdrop_path}`
                  : null
              }
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
          </>

          {credits && recommendations.results ? (
            <ActorsCard credits={credits} loading={props.loading} />
          ) : null}
          {recommendations && recommendations.results ? (
            <RenderMovies
              page="Similar"
              movies={recommendations.results.slice(0, 8)}
            />
          ) : null}
        </MovieDetails>
      )}
    </>
  );
};
const MoviePoster = styled.div`
  width: 300px;
  height: 450px;
  margin: 20px 20px 0 0;
  background-color: #f2f2f2;
  border-radius: 5px;
  img {
    border-radius: 5px;
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
const PlaceholderInfoText = styled.div`
  height: 15px;
  width: 95%;
  background-color: #f2f2f2;
  margin: 5px;
`;
const PlaceholderInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 80%;
  margin-top: 20px;
  ${PlaceholderInfoText}:nth-child(1) {
    width: 20%;
    background-color: ${AccentColor};
  }
  ${PlaceholderInfoText}:nth-child(2n) {
    width: 90%;
  }
  ${PlaceholderInfoText}:nth-child(3n) {
    width: 85%;
  }
  ${PlaceholderInfoText}:nth-child(4n) {
    width: 80%;
  }
  ${PlaceholderInfoText}:nth-child(5n) {
    width: 75%;
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
