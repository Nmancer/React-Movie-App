import React, { Component } from "react";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import "../../Styles/SearchPage.css";
const genreOptions = [
  { value: 28, label: "Action " },
  { value: 12, label: "Adventure " },
  { value: 16, label: "Animation " },
  { value: 35, label: "Comedy " },
  { value: 80, label: "Crime " },
  { value: 99, label: "Documentary" },
  { value: 18, label: "Drama" },
  { value: 10751, label: "Family" },
  { value: 14, label: "Fantasy" },
  { value: 36, label: "History" },
  { value: 27, label: "Horror" },
  { value: 10402, label: "Music" },
  { value: 9648, label: "Mystery" },
  { value: 10749, label: "Romance" },
  { value: 878, label: "Science Fiction" },
  { value: 10770, label: "TV Movie" },
  { value: 53, label: "Thriller" },
  { value: 10752, label: "War" },
  { value: 37, label: "Western" }
];
const sortOptions = [
  { value: "release_date.asc", label: "Release Date Asc." },
  { value: "release_date.desc", label: "Release Date Desc." },
  { value: "popularity.asc", label: "Popularity Asc." },
  { value: "popularity.desc", label: "Popularity Desc." },
  { value: "vote_average.asc", label: "Rating Asc." },
  { value: "vote_average.desc", label: "Rating Desc." }
];
const ratingGreaterOptions = [
  { value: 1, label: "More Than 1" },
  { value: 2, label: "More Than 2" },
  { value: 3, label: "More Than 3" },
  { value: 4, label: "More Than 4" },
  { value: 5, label: "More Than 5" },
  { value: 6, label: "More Than 6" },
  { value: 7, label: "More Than 7" },
  { value: 8, label: "More Than 8" },
  { value: 9, label: "More Than 9" }
];

const ratingLessOptions = [
  { value: 2, label: "Less Than 2" },
  { value: 3, label: "Less Than 3" },
  { value: 4, label: "Less Than 4" },
  { value: 5, label: "Less Than 5" },
  { value: 6, label: "Less Than 6" },
  { value: 7, label: "Less Than 7" },
  { value: 8, label: "Less Than 8" },
  { value: 9, label: "Less Than 9" },
  { value: 10, label: "Less Than 1" }
];
class SearchPage extends Component {
  state = {
    yearStart: 1850,
    yearEnd: 2018,
    ratingLessThan: { value: 10 },
    ratingGreaterThan: { value: 1 },
    sort: { value: "popularity.desc" },
    genre: [],
    genres: ""
  };

  handleYearStart = event => {
    this.setState({ yearStart: event.target.value });
  };
  handleYearEnd = event => {
    this.setState({ yearEnd: event.target.value });
  };
  handleRatingLessThan = selectedOption => {
    this.setState({ ratingLessThan: selectedOption });
  };
  handleRatingGreaterThan = selectedOption => {
    this.setState({ ratingGreaterThan: selectedOption });
  };
  handleSort = selectedOption => {
    this.setState({ sort: selectedOption });
  };
  handleGenre = selectedOption => {
    let genreStr = "";

    this.setState({ genre: selectedOption }, () => {
      this.state.genre.forEach(genre => {
        genreStr += genre.value + ",";
      });
      this.setState({ genres: genreStr.slice(0, genreStr.length - 1) });
    });
  };

  render() {
    return (
      <div>
        <div className="search-page">
          <div className="search-page-item">
            <label>
              Genres:
              <Select
                value={this.state.genre}
                onChange={this.handleGenre}
                options={genreOptions}
                isMulti={true}
              />
            </label>
          </div>
          <div className="search-page-item">
            <label>
              Rating More Than:
              <Select
                value={this.state.ratingGreaterThan}
                onChange={this.handleRatingGreaterThan}
                options={ratingGreaterOptions}
              />
            </label>
          </div>{" "}
          <div className="search-page-item">
            <label>
              Rating Less Than:
              <Select
                value={this.state.ratingLessThan}
                onChange={this.handleRatingLessThan}
                options={ratingLessOptions}
              />
            </label>
          </div>{" "}
          <div className="search-page-item">
            <label>
              Sort
              <Select
                value={this.state.sort}
                onChange={this.handleSort}
                options={sortOptions}
              />
            </label>
          </div>{" "}
          <div className="search-page-item">
            <label>
              From
              <input
                type="number"
                value={this.state.yearStart}
                onChange={this.handleYearStart}
              />
            </label>
          </div>{" "}
          <div className="search-page-item">
            <label>
              To
              <input
                type="number"
                value={this.state.yearEnd}
                onChange={this.handleYearEnd}
              />
            </label>
          </div>
        </div>
        <CurrentMovies
          page="Filter"
          filtering={{
            yearStart: this.state.yearStart,
            yearEnd: this.state.yearEnd,
            ratingLessThan: this.state.ratingLessThan.value,
            ratingGreaterThan: this.state.ratingGreaterThan.value,
            sort: this.state.sort.value,
            genres: this.state.genres
          }}
        />
      </div>
    );
  }
}

export default withRouter(SearchPage);
