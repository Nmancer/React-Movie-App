import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentMovies } from "../../actions";
import RenderMovies from "../Dumb Components/RenderMovies";
import Loader from "../Dumb Components/Loader";

class CurrentMovies extends Component {
  state = { isLoading: false };
  _isMounted = false;
  componentDidMount() {
    this.loadMovies();
    window.addEventListener("scroll", this.handleScrolling);

    this._isMounted = true;
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.filtering !== prevProps.filtering ||
      this.props.page !== prevProps.page
    ) {
      this.loadMovies();
    }
  }
  loadMovies = (page = 1) => {
    this.setState({ isLoading: true });
    this.props
      .fetchCurrentMovies(this.props.page, page, this.props.filtering)
      .then(() => this.setState({ isLoading: false }));
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrolling);
    this._isMounted = false;
  }
  handleScrolling = event => {
    if (this.state.isLoading) {
      return;
    }
    if (
      window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight &&
      this._isMounted
    ) {
      this.loadMovies(this.props.currentMovies.page + 1);
    }
  };

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
        {this.state.isLoading && <Loader />}
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
