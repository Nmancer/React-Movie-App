import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchActorDetails } from "../../actions";
import RenderMovies from "../Presentational/RenderMovies";
import ActorInfo from "../Presentational/ActorInfo";
const ActorDetails = ({ fetchActorDetails, match, actorDetails }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActorDetails(match.params.id).then(() => setLoading(false));
  }, []);

  return (
    <>
      <ActorInfo actorDetails={actorDetails} loading={loading} />
      {actorDetails.movie_credits && (
        <RenderMovies page="Actor" movies={actorDetails.movie_credits.cast} />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return { actorDetails: state.actorDetails };
};
export default connect(
  mapStateToProps,
  { fetchActorDetails }
)(ActorDetails);
