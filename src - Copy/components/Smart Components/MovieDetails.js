import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../actions";
import RenderMovieDetails from "../Dumb Components/RenderMovieDetails";

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchMovieDetails(this.props.match.params.id);
    }
  }
  render() {
    const loading = this.props.details;
    return (
      <div>
        {loading ? <RenderMovieDetails details={this.props.details} /> : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { details: state.movieDetails };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails }
)(MovieDetails);
