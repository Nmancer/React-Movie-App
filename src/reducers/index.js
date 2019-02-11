import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";
import MovieDetailsReducer from "./MovieDetailsReducer";
import SearchReducer from "./SearchReducer";
import ActorReducer from "./ActorReducer";

export default combineReducers({
  movies: MoviesReducer,
  movieDetails: MovieDetailsReducer,
  searchResults: SearchReducer,
  actorDetails: ActorReducer
});
