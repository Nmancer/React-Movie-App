import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../actions";
import RenderMovieDetails from "../Presentational/RenderMovieDetails";
import { withRouter } from "react-router-dom";
class MovieDetails extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id).then(() => {
      this.setState({ loading: false });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchMovieDetails(this.props.match.params.id).then(() => {
        this.setState({ loading: false });
      });
    }
  }
  render() {
    return (
      <>
        {this.props.details && (
          <RenderMovieDetails
            loading={this.state.loading}
            details={this.props.details}
            movieTitle={this.props.details.title}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return { details: state.movieDetails };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchMovieDetails }
  )(MovieDetails)
);
