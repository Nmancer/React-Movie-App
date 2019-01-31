import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";
import MovieDetailsReducer from "./MovieDetailsReducer";
import SearchReducer from "./SearchReducer";
import ActorReducer from "./ActorReducer";
import { reducer as burgerMenu } from "redux-burger-menu";
export default combineReducers({
  movies: MoviesReducer,
  movieDetails: MovieDetailsReducer,
  searchResults: SearchReducer,
  actorDetails: ActorReducer,
  burgerMenu
});
