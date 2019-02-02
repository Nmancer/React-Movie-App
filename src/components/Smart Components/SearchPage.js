import React, { Component } from "react";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import styled from "styled-components";

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
      <React.Fragment>
        <SearchPageWrapper>
          <SearchPageItem>
            <SearchPageLabel>
              Genres:
              <Select
                value={this.state.genre}
                onChange={this.handleGenre}
                options={genreOptions}
                isMulti={true}
              />
            </SearchPageLabel>
          </SearchPageItem>
          <SearchPageItem>
            <SearchPageLabel>
              Rating More Than:
              <Select
                value={this.state.ratingGreaterThan}
                onChange={this.handleRatingGreaterThan}
                options={ratingGreaterOptions}
              />
            </SearchPageLabel>
          </SearchPageItem>{" "}
          <SearchPageItem>
            <SearchPageLabel>
              Rating Less Than:
              <Select
                value={this.state.ratingLessThan}
                onChange={this.handleRatingLessThan}
                options={ratingLessOptions}
              />
            </SearchPageLabel>
          </SearchPageItem>{" "}
          <SearchPageItem>
            <SearchPageLabel>
              Sort
              <Select
                value={this.state.sort}
                onChange={this.handleSort}
                options={sortOptions}
              />
            </SearchPageLabel>
          </SearchPageItem>{" "}
          <SearchPageItem>
            <SearchPageLabel>
              From
              <SearchPageInput
                type="number"
                value={this.state.yearStart}
                onChange={this.handleYearStart}
              />
            </SearchPageLabel>
          </SearchPageItem>{" "}
          <SearchPageItem>
            <SearchPageLabel>
              To
              <SearchPageInput
                type="number"
                value={this.state.yearEnd}
                onChange={this.handleYearEnd}
              />
            </SearchPageLabel>
          </SearchPageItem>
        </SearchPageWrapper>
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
      </React.Fragment>
    );
  }
}
const SearchPageWrapper = styled.div`
  background: white;
  color: black;
  margin: 90px auto 0px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SearchPageLabel = styled.label`
  color: black;
`;

const SearchPageItem = styled.div`
  color: black;
  width: 150px;
  margin: 5px;
  :first-child {
    width: 300px;
  }
`;
const SearchPageInput = styled.input`
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 37px;
  outline: 0;
  position: relative;
  transition: all 100ms;
  box-sizing: border-box;
  padding: 15px 0 15px 0;
  width: 150px;
  font-size: 16px;
`;

export default withRouter(SearchPage);
