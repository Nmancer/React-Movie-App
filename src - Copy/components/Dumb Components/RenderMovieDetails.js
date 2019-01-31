import React from "react";
import "../../Styles/MovieDetails.css";
import FadeIn from "react-lazyload-fadein";
import ActorsCard from "./ActorsCard";
import RenderMovies from "./RenderMovies";
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
  const bgImage = backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${backdrop_path})`
    : require("../../Images/notFound.png");
  return (
    <FadeIn height={1500} placeholder={<div className="loader" />}>
      {onload => (
        <div className="movie-details">
          <React.Fragment>
            <div
              className="movie-card"
              style={{
                backgroundImage: bgImage
              }}
            >
              <div className="movie-card-container">
                <div className="movie-card-left">
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : require("../../Images/notFound.png")
                    }
                    alt=""
                    onLoad={onload}
                  />
                </div>
                <div className="movie-card-right">
                  <h1>{title}</h1>
                  <h2>{tagline}</h2>
                  <h3>
                    {genres
                      ? genres.map(genre => {
                          return genre.name + " ";
                        })
                      : null}
                  </h3>
                  <p> {overview}</p>
                  <h4>
                    <span className="movie-card-left-left">Date: </span>
                    {release_date}
                  </h4>
                  <h4>
                    <span className="movie-card-left-left">Runtime: </span>{" "}
                    {runtime} mins
                  </h4>
                  <h4>
                    <span className="movie-card-left-left">Studio: </span>
                    {production_companies && production_companies[0]
                      ? production_companies[0].name
                      : null}
                  </h4>
                  <h4>
                    <span className="movie-card-left-left">Director: </span>
                    {credits && credits.crew[0] ? credits.crew[0].name : null}
                  </h4>
                  <h4>
                    <span className="movie-card-left-left">Rating: </span>
                    {vote_average}
                  </h4>
                  <h4>
                    <span className="movie-card-left-left">Revenue: </span>
                    {formatter.format(revenue)}
                  </h4>
                </div>
              </div>
            </div>
          </React.Fragment>
          <div className="actors-recommendations">
            <ActorsCard credits={credits} />

            {recommendations ? (
              <RenderMovies page="Similar" movies={recommendations.results} />
            ) : null}
          </div>
        </div>
      )}
    </FadeIn>
  );
};
export default RenderMovieDetails;
