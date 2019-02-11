import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActorDetails } from "../../actions";
import RenderMovies from "../Dumb Components/RenderMovies";
import ActorInfo from "../Dumb Components/ActorInfo";
class ActorDetails extends Component {
  componentDidMount() {
    this.props.fetchActorDetails(this.props.match.params.id);
  }
  render() {
    return (
      <>
        {this.props.actorDetails.movie_credits && (
          <>
            <ActorInfo
              biography={this.props.actorDetails.biography}
              birthday={this.props.actorDetails.birthday}
              deathday={this.props.actorDetails.deathday}
              name={this.props.actorDetails.name}
              place_of_birth={this.props.actorDetails.place_of_birth}
              profile_path={this.props.actorDetails.profile_path}
            />
            <RenderMovies
              page="Actor"
              movies={this.props.actorDetails.movie_credits.cast}
            />
          </>
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
