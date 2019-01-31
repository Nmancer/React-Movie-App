import React, { Component } from "react";
import { connect } from "react-redux";

import RenderMovies from "../Dumb Components/RenderMovies";
class SearchResults extends Component {
  render() {
    return <RenderMovies movies={this.props.results} page="Found" />;
  }
}
const mapStateToProps = state => {
  return { results: state.searchResults };
};
export default connect(mapStateToProps)(SearchResults);
