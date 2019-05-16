import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../../actions";
import { Link, withRouter } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { FaSistrix } from "react-icons/fa";
import styled from "styled-components";

const getSuggestionValue = suggestion => {
  return suggestion.title;
};

const Search = props => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    props.fetchSearchResults(value).then(() => {
      setIsLoading(true);
      setSuggestions(props.searchResults);
    });
  }, [isLoading]);

  const loadSuggestions = value => {
    setIsLoading(true);
    props.fetchSearchResults(value).then(() => {
      setIsLoading(false);
      setSuggestions(props.searchResults);
    });
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    loadSuggestions(value);
  };
  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    props.history.push(`/movies/${suggestion.id}`);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search for a movie",
    value,
    onChange: onChange
  };

  return (
    <StyledAutoSuggest>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps}
        type={"search"}
        renderInputComponent={renderInputComponent}
      />
    </StyledAutoSuggest>
  );
};

const mapStateToProps = state => {
  return { searchResults: state.searchResults };
};

const renderSuggestion = suggestion => {
  return (
    <Link to={`/movies/${suggestion.id}`} key={suggestion.id}>
      <SuggestionResult>
        <img
          src={`https://image.tmdb.org/t/p/w45/${suggestion.poster_path}`}
          alt={""}
        />
        <div>
          <SearchTitle>
            {suggestion.title} ({suggestion.release_date.slice(0, 4)})
          </SearchTitle>
          <p>
            {suggestion.overview.length > 100
              ? suggestion.overview.slice(0, 97) + " ..."
              : suggestion.overview}
          </p>
        </div>
      </SuggestionResult>{" "}
    </Link>
  );
};
const renderInputComponent = inputProps => (
  <div className="inputContainer">
    <FaSistrix className="icon" />
    <input {...inputProps} />
  </div>
);

const StyledAutoSuggest = styled.div`
  .react-autosuggest__input {
    margin-left: 32px;
    width: 90%;
    height: 12px;
    padding: 20px 20px 20px 20px;
    background-color: white;
    border: 1px solid #d1d1d1;
    font-size: 16px;
    outline: none;
    color: rgb(94, 94, 94);
    border-radius: 3px;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 45px;
    width: 295px;
    font-size: 12px;
    border-radius: 4px;
    z-index: 5;
  }

  .react-autosuggest__suggestions-list {
    border-radius: 4px;
    background-color: white;
    border: 1px solid #d1d1d1;
    margin-left: 0;
    padding: 0;
    top: 5px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    max-height: 630px;
    overflow-y: scroll;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  }
  .react-autosuggest__suggestions-list::-webkit-scrollbar {
    display: none;
  }
  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 14px;
  }
  .icon {
    color: rgb(94, 94, 94);
    position: absolute;
    top: 12px;
    right: 5px;
    width: 16px;
    height: 16px;
  }
  .react-autosuggest__suggestion--highlighted {
    background-color: rgb(218, 218, 218);
    color: #2ecc71;
  }
  .react-autosuggest__container {
    position: relative;
  }
  .react-autosuggest__input .formContainer {
    width: 100%;
  }

  .react-autosuggest__input::placeholder {
    color: rgb(48, 47, 47);
    opacity: 1;
  }

  .react-autosuggest__input::-ms-input-placeholder {
    color: rgb(48, 47, 47);
  }

  .react-autosuggest__input::-ms-input-placeholder {
    color: rgb(48, 47, 47);
  }
`;

const SearchTitle = styled.h3`
  margin-left: 12px;
  font-size: 12px;
`;

const SuggestionResult = styled.div`
  display: flex;
  :hover h3 {
    color: #2ecc71;
  }
  h3 {
    color: rgb(34, 34, 34);
  }
  p {
    margin-left: 12px;
    font-size: 14px;
    color: rgb(49, 49, 49);
  }
`;

export default withRouter(
  connect(
    mapStateToProps,
    { fetchSearchResults }
  )(Search)
);
