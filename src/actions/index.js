import MovieDB from "../helpers/MovieDB";
const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchCurrentMovies = (
  movieCategory,
  page,
  filter
) => async dispatch => {
  const params = { api_key: API_KEY, page: page };
  let url;
  switch (movieCategory) {
    case "Popular":
      url = `movie/popular`;
      break;
    case "Top rated":
      url = `movie/top_rated`;
      break;
    case "Upcoming":
      url = `movie/upcoming`;
      break;
    case "Filter": {
      const yearStart =
        filter.yearStart <= filter.yearEnd ? filter.yearStart : 1850;
      const yearEnd =
        filter.yearEnd >= filter.yearStart ? filter.yearEnd : 2018;
      const ratingLessThan =
        filter.ratingLessThan >= filter.ratingGreaterThan
          ? filter.ratingLessThan
          : 10;
      const ratingGreaterThan =
        filter.ratingGreaterThan <= filter.ratingLessThan
          ? filter.ratingGreaterThan
          : 1;
      params.sort_by = filter.sort;
      params["primary_release_date.gte"] = yearStart;
      params["primary_release_date.lte"] = yearEnd;
      params["vote_average.gte"] = ratingGreaterThan;
      params["vote_average.lte"] = ratingLessThan;
      params.with_genres = filter.genres;
      url = `discover/movie`;
      break;
    }
    default:
      url = `movie/now_playing`;
      break;
  }
  const res = await MovieDB.get(url, { params });
  dispatch({ type: "FETCH_MOVIES", payload: res.data });
};

export const fetchMovieDetails = id => async dispatch => {
  const res = await MovieDB.get(`movie/${id}`, {
    params: { api_key: API_KEY, append_to_response: "credits,recommendations" }
  });
  dispatch({ type: "FETCH_MOVIEDETAILS", payload: res.data });
};

export const fetchSearchResults = query => async dispatch => {
  const res = await MovieDB.get(`search/movie`, {
    params: { api_key: API_KEY, query }
  });
  dispatch({ type: "FETCH_SEARCH", payload: res.data.results });
};

export const fetchActorDetails = id => async dispatch => {
  const res = await MovieDB.get(`person/${id}`, {
    params: { api_key: API_KEY, append_to_response: "movie_credits" }
  });
  dispatch({ type: "FETCH_ACTORDETAILS", payload: res.data });
};
