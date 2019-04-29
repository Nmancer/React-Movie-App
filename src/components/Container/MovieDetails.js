import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../actions";
import RenderMovieDetails from "../Presentational/RenderMovieDetails";
import { withRouter } from "react-router-dom";
const MovieDetails = ({ details, fetchMovieDetails, match }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails(match.params.id).then(() => setLoading(false));
  }, [match.params.id]);

  return (
    <>
      {details && (
        <RenderMovieDetails
          loading={loading}
          details={details}
          movieTitle={details.title}
        />
      )}
    </>
  );
};
const mapStateToProps = state => {
  return { details: state.movieDetails };
};
export default withRouter(
  connect(
    mapStateToProps,
    { fetchMovieDetails }
  )(MovieDetails)
);
