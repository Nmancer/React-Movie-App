import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import RenderFilter from "../Presentational/RenderFilter";

const SearchPage = props => {
  const [filters, setFilters] = useState({
    yearStart: 1850,
    yearEnd: new Date().getFullYear(),
    ratingLessThan: 10,
    ratingGreaterThan: 1,
    sort: "popularity.desc",
    genre: [],
    genres: ""
  });
  useEffect(() => {
    let genreStr = "";
    genre.forEach(genre => {
      genreStr += genre.value + ",";
    });

    setFilters({ ...filters, genres: genreStr.slice(0, genreStr.length - 1) });
  }, [filters.genre]);
  const handleFilters = event => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleRatingLessThan = selectedOption => {
    setFilters({ ...filters, ratingLessThan: selectedOption });
  };
  const handleRatingGreaterThan = selectedOption => {
    setFilters({ ...filters, ratingGreaterThan: selectedOption });
  };
  const handleSort = selectedOption => {
    setFilters({ ...filters, sort: selectedOption });
  };
  const handleGenre = selectedOption => {
    setFilters({ ...filters, genre: selectedOption });
  };

  const {
    yearStart,
    yearEnd,
    ratingLessThan,
    ratingGreaterThan,
    sort,
    genre,
    genres
  } = filters;
  return (
    <>
      <RenderFilter
        yearStart={yearStart}
        yearEnd={yearEnd}
        ratingLessThan={ratingLessThan}
        ratingGreaterThan={ratingGreaterThan}
        sort={sort}
        genre={genre}
        genres={genres}
        handleFilters={handleFilters}
        handleRatingLessThan={handleRatingLessThan}
        handleRatingGreaterThan={handleRatingGreaterThan}
        handleSort={handleSort}
        handleGenre={handleGenre}
      />
      <CurrentMovies
        page="Filter"
        filtering={{
          yearStart: yearStart,
          yearEnd: yearEnd,
          ratingLessThan: ratingLessThan.value,
          ratingGreaterThan: ratingGreaterThan.value,
          sort: sort.value,
          genres: genres
        }}
      />
    </>
  );
};

export default withRouter(SearchPage);
