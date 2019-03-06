import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActorDetails } from "../../actions";
import RenderMovies from "../Presentational/RenderMovies";
import ActorInfo from "../Presentational/ActorInfo";
class ActorDetails extends Component {
  state = { loading: true };
  componentDidMount() {
    this.props
      .fetchActorDetails(this.props.match.params.id)
      .then(() => this.setState({ loading: false }));
  }
  render() {
    return (
      <>
        <ActorInfo
          actorDetails={this.props.actorDetails}
          loading={this.state.loading}
        />
        {this.props.actorDetails.movie_credits && (
          <RenderMovies
            page="Actor"
            movies={this.props.actorDetails.movie_credits.cast}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { actorDetails: state.actorDetails };
};
export default connect(
  mapStateToProps,
  { fetchActorDetails }
)(ActorDetails);
