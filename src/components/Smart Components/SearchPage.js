import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import RenderFilter from "../Dumb Components/RenderFilter";

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
      <>
        <RenderFilter
          yearStart={this.state.yearStart}
          yearEnd={this.state.yearEnd}
          ratingLessThan={this.state.ratingLessThan}
          ratingGreaterThan={this.state.ratingGreaterThan}
          sort={this.state.sort}
          genre={this.state.genre}
          genres={this.state.genres}
          handleYearStart={this.handleYearStart}
          handleYearEnd={this.handleYearEnd}
          handleRatingLessThan={this.handleRatingLessThan}
          handleRatingGreaterThan={this.handleRatingGreaterThan}
          handleSort={this.handleSort}
          handleGenre={this.handleGenre}
        />
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
      </>
    );
  }
}

export default withRouter(SearchPage);
