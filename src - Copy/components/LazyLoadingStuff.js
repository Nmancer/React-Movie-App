import Loadable from "react-loadable";
import React from "react";

function Loading({ error }) {
  if (error) {
    console.log(error);
  } else {
    return <div className="loader" />;
  }
}

const SideMenu = Loadable({
  loader: () => import("./Smart Components/SideMenu"),
  loading: Loading
});
const MovieDetails = Loadable({
  loader: () => import("./Smart Components/MovieDetails"),
  loading: Loading
});
const TopMovies = Loadable({
  loader: () => import("./Dumb Components/Pages/TopMovies"),
  loading: Loading
});

const PopularMovies = Loadable({
  loader: () => import("./Dumb Components/Pages/PopularMovies"),
  loading: Loading
});
const UpcomingMovies = Loadable({
  loader: () => import("./Dumb Components/Pages/UpcomingMovies"),
  loading: Loading
});
const SearchPage = Loadable({
  loader: () => import("./Smart Components/SearchPage"),
  loading: Loading
});
const SearchResults = Loadable({
  loader: () => import("./Smart Components/SearchResults"),
  loading: Loading
});
const ActorDetails = Loadable({
  loader: () => import("./Smart Components/ActorDetails"),
  loading: Loading
});
export {
  SideMenu,
  MovieDetails,
  TopMovies,
  PopularMovies,
  UpcomingMovies,
  SearchPage,
  ActorDetails,
  SearchResults
};
