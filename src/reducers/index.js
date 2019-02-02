import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";
import MovieDetailsReducer from "./MovieDetailsReducer";
import SearchReducer from "./SearchReducer";
import ActorReducer from "./ActorReducer";
import ThemeReducer from "./ThemeReducer";
import AccentColorReducer from "./AccentColorReducer";
export default combineReducers({
  movies: MoviesReducer,
  movieDetails: MovieDetailsReducer,
  searchResults: SearchReducer,
  actorDetails: ActorReducer,
  changeTheme: ThemeReducer,
  accentColor: AccentColorReducer
});
