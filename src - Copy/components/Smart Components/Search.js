import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../../actions";
import { Link, withRouter } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { FaSistrix } from "react-icons/fa";
import "../../Styles/Search.css";

const getSuggestionValue = suggestion => {
  return suggestion.title;
};

const renderSuggestion = suggestion => {
  return (
    <Link to={`/movies/${suggestion.id}`} key={suggestion.id}>
      <div className="autoSuggestResult">
        <img
          src={`https://image.tmdb.org/t/p/w45/${suggestion.poster_path}`}
          alt={""}
        />
        <div className="resultText">
          <h3 className="searchTitle">
            {suggestion.title} ({suggestion.release_date.slice(0, 4)})
          </h3>
          <p>
            {suggestion.overview.length > 100
              ? suggestion.overview.slice(0, 97) + " ..."
              : suggestion.overview}
          </p>
        </div>
      </div>{" "}
    </Link>
  );
};
const renderInputComponent = inputProps => (
  <div className="inputContainer">
    <FaSistrix className="icon" />
    <input {...inputProps} />
  </div>
);
class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      isLoading: false,
      id: null
    };
  }
  loadSuggestions(value) {
    this.setState({
      isLoading: true
    });

    this.props.fetchSearchResults(value);
    this.setState({
      isLoading: false,
      suggestions: this.props.searchResults
    });
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };
  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    this.props.history.push(`/movies/${suggestion.id}`);
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.props.history.push("/search");
    }
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Movies",
      value,
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          type={"search"}
          renderInputComponent={renderInputComponent}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { searchResults: state.searchResults };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSearchResults }
  )(Search)
);
