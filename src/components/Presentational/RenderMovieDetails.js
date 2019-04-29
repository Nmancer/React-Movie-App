import React from "react";
import styled from "styled-components";
import { AccentColor } from "../../helpers/Theming";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MovieDetailsPlaceholder from "./Placeholders/MovieDetailsPlaceholder";

import RenderMovies from "./RenderMovies";
import ActorsCard from "./ActorsCard";
import Reviews from "./Reviews";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const RenderMovieDetails = ({ details, loading }) => {
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
    reviews,
    runtime,
    tagline,
    vote_average,
    revenue
  } = details;

  return (
    <MovieDetails>
      <MovieCardWrapper
        bg={
          backdrop_path
            ? `https://image.tmdb.org/t/p/original${backdrop_path}`
            : null
        }
      >
        {loading ? (
          <PlaceholderWrapper>
            <MovieDetailsPlaceholder />
          </PlaceholderWrapper>
        ) : (
          <MovieCard>
            <MoviePoster>
              <LazyLoadImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : require("../../Images/notFoundActor.png")
                }
                alt={title}
                effect="blue"
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
        )}
      </MovieCardWrapper>

      {credits && credits.cast.length > 0 && (
        <ActorsCard credits={credits} loading={loading} />
      )}
      {reviews && reviews.results.length > 0 && <Reviews reviews={reviews} />}
      {recommendations && recommendations.results.length > 0 && (
        <RenderMovies
          page="Similar"
          movies={recommendations.results.slice(0, 10)}
        />
      )}
    </MovieDetails>
  );
};
const MoviePoster = styled.div`
  margin: 20px;
  min-width: 20%;
  img {
    border-radius: 5px;
    width: 100%;
    height: auto;
  }
`;
const MovieDetails = styled.div`
  margin-top: 70px;
`;
const MovieCard = styled.div`
  width: 60%;
  margin: 0 auto;
  min-height: 400px;
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;
const PlaceholderWrapper = styled(MovieCard)`
  display: block;
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
