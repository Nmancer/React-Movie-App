import Loadable from "react-loadable";
// import React from "react";
// import Loader from "../components/Presentational/Loader";

function Loading({ error }) {
  if (error) {
    console.log(error);
  }
  return null;
}

const SideMenu = Loadable({
  loader: () => import("../components/Presentational/SideMenu"),
  loading: Loading
});
const MovieDetails = Loadable({
  loader: () => import("../components/Container/MovieDetails"),
  loading: Loading
});

const SearchPage = Loadable({
  loader: () => import("../components/Container/SearchPage"),
  loading: Loading
});

const ActorDetails = Loadable({
  loader: () => import("../components/Container/ActorDetails"),
  loading: Loading
});

export { SideMenu, MovieDetails, SearchPage, ActorDetails };
