import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/MovieCards.css";
import Genres from "../../Genres";
import FadeIn from "react-lazyload-fadein";
import Placeholder from "./Placeholder";
import LoadMoreButton from "./LoadMoreButton";

const RenderMovies = props => {
  const movies = props.movies;
  return (
    <div className="content">
      <div className="movies-header">
        {movies.length === 0 ? null : (
          <h1>{props.page ? props.page : "Latest"} Movies</h1>
        )}
      </div>

      <div className="movie-cards">
        {movies.map(movie => {
          return (
            <FadeIn
              height={192}
              placeholder={<Placeholder />}
              key={movie.id}
              offset={500}
            >
              {onload => (
                <Link to={`/movies/${movie.id}`}>
                  <div className="movie-card-item">
                    <div className="img-wrapper">
                      <img
                        src={
                          movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/w342/${
                                movie.backdrop_path
                              }`
                            : require("../../Images/notFound.png")
                        }
                        onLoad={onload}
                        alt={movie.title}
                      />
                    </div>
                    <div className="movie-overview">
                      {movie.overview.length > 200
                        ? movie.overview.slice(0, 197) + "..."
                        : movie.overview}
                    </div>
                    <div className="text-wrapper">
                      <div className="text-wrapper-top">
                        <h2>{movie.title}</h2>
                      </div>
                      <div className="text-wrapper-mid">
                        <p>
                          {movie.genre_ids.slice(0, 3).map(genre => {
                            return Genres.get(genre) + " ";
                          })}
                        </p>
                      </div>
                      <div className="text-wrapper-bottom">
                        <div>
                          <p>{movie.release_date.slice(0, 4)}</p>
                        </div>
                        <div className="text-wrapper-bottom-rating">
                          <p>{movie.vote_average}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </FadeIn>
          );
        })}
      </div>
      {props.page === "Similar" ? null : (
        <LoadMoreButton
          fetchMovies={props.fetchMovies}
          page={props.page}
          resultsPage={props.resultsPage}
        />
      )}
    </div>
  );
};
export default RenderMovies;
