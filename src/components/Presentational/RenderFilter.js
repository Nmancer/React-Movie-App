import React from "react";
import styled from "styled-components";
import {
  genreOptions,
  ratingGreaterOptions,
  ratingLessOptions,
  sortOptions
} from "../../helpers/SetupValues";
import Select from "react-select";
import { PrimaryColor, SecondaryColor } from "../../helpers/Theming";

const RenderFilter = props => {
  const {
    yearStart,
    yearEnd,
    ratingLessThan,
    ratingGreaterThan,
    sort,
    genre,
    handleRatingLessThan,
    handleRatingGreaterThan,
    handleSort,
    handleFilters,
    handleGenre
  } = props;
  return (
    <SearchPageWrapper>
      <SearchPageItem>
        <SearchPageLabel>
          Genres:
          <Select
            value={genre}
            onChange={handleGenre}
            options={genreOptions}
            isMulti={true}
            styles={customStyles}
          />
        </SearchPageLabel>
      </SearchPageItem>
      <SearchPageItem>
        <SearchPageLabel>
          Rating More Than:
          <Select
            value={ratingGreaterThan}
            onChange={handleRatingGreaterThan}
            options={ratingGreaterOptions}
            styles={customStyles}
          />
        </SearchPageLabel>
      </SearchPageItem>
      <SearchPageItem>
        <SearchPageLabel>
          Rating Less Than:
          <Select
            value={ratingLessThan}
            onChange={handleRatingLessThan}
            options={ratingLessOptions}
            styles={customStyles}
            name="booo"
          />
        </SearchPageLabel>
      </SearchPageItem>
      <SearchPageItem>
        <SearchPageLabel>
          Sort
          <Select
            value={sort}
            onChange={handleSort}
            options={sortOptions}
            styles={customStyles}
          />
        </SearchPageLabel>
      </SearchPageItem>
      <SearchPageItem>
        <SearchPageLabel>
          From
          <SearchPageInput
            type="number"
            value={yearStart}
            onChange={handleFilters}
            name="yearStart"
          />
        </SearchPageLabel>
      </SearchPageItem>
      <SearchPageItem>
        <SearchPageLabel>
          To
          <SearchPageInput
            type="number"
            value={yearEnd}
            onChange={handleFilters}
            name="yearEnd"
          />
        </SearchPageLabel>
      </SearchPageItem>
    </SearchPageWrapper>
  );
};
const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    background: "gray"
  })
};

const SearchPageWrapper = styled.div`
  background-color: ${SecondaryColor};
  margin: 70px auto 0px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  select option {
    background-color: red;
  }
`;
const SearchPageLabel = styled.label`
  color: ${PrimaryColor};
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
export default RenderFilter;
