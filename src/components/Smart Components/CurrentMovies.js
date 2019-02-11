import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentMovies } from "../../actions";
import RenderMovies from "../Dumb Components/RenderMovies";
class CurrentMovies extends Component {
  componentDidMount() {
    this.props.fetchCurrentMovies(this.props.page, 1, this.props.filtering);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.filtering !== prevProps.filtering ||
      this.props.page !== prevProps.page
    ) {
      this.props.fetchCurrentMovies(this.props.page, 1, this.props.filtering);
    }
  }

  render() {
    const topMargin = this.props.page === "Filter" ? "0" : "90px";
    return (
      <div style={{ marginTop: topMargin }}>
        {this.props.currentMovies.results ? (
          <RenderMovies
            page={this.props.page}
            movies={this.props.currentMovies.results}
            resultsPage={this.props.currentMovies.page}
            fetchMovies={this.props.fetchCurrentMovies}
            filtering={this.props.filtering}
            total={this.props.currentMovies.total_results}
          />
        ) : (
          <RenderMovies fetching={true} />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { currentMovies: state.movies };
};
export default connect(
  mapStateToProps,
  { fetchCurrentMovies }
)(CurrentMovies);
