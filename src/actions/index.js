import MovieDB from "../MovieDB";
const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchCurrentMovies = (
  movieCategory,
  page,
  filter
) => async dispatch => {
  let url;
  switch (movieCategory) {
    case "Popular":
      url = `movie/popular?api_key=${API_KEY}&page=${page}`;
      break;
    case "Top rated":
      url = `movie/top_rated?api_key=${API_KEY}&page=${page}`;
      break;
    case "Upcoming":
      url = `movie/upcoming?api_key=${API_KEY}&page=${page}`;
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
      const sort = filter.sort;
      const genres = filter.genres;

      url = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&primary_release_date.gte=${yearStart}&primary_release_date.lte=${yearEnd}&vote_average.gte=${ratingGreaterThan}&vote_average.lte=${ratingLessThan}&with_genres=${genres}&page=${page}`;
      break;
    }
    default:
      url = `movie/now_playing?api_key=${API_KEY}&page=${page}`;
      break;
  }

  const res = await MovieDB.get(url);

  dispatch({ type: "FETCH_MOVIES", payload: res.data });
};
export const fetchMovieDetails = id => async dispatch => {
  const res = await MovieDB.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,recommendations`
  );
  dispatch({ type: "FETCH_MOVIEDETAILS", payload: res.data });
};
export const addQuery = query => async dispatch => {
  dispatch({ type: "ADD_QUERY", payload: query });
};
export const fetchSearchResults = query => async dispatch => {
  const res = await MovieDB.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  dispatch({ type: "FETCH_SEARCH", payload: res.data.results });
};

export const fetchActorDetails = id => async dispatch => {
  const res = await MovieDB.get(
    `person/${id}?api_key=${API_KEY}&append_to_response=movie_credits`
  );
  dispatch({ type: "FETCH_ACTORDETAILS", payload: res.data });
};
