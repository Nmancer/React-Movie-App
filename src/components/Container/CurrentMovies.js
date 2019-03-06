import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentMovies } from "../../actions";
import RenderMovies from "../Presentational/RenderMovies";
// import Loader from "./../Presentational/Loader";
import _throttle from "lodash/throttle";
import Carousel from "../Presentational/Carousel";
class CurrentMovies extends Component {
  state = { isLoading: false };
  _isMounted = false;

  componentDidMount() {
    this.loadMovies();
    window.addEventListener("scroll", _throttle(this.handleScrolling, 300));
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
      .then(() => {
        this.setState({ isLoading: false });
      });
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", _throttle(this.handleScrolling, 300));
    this._isMounted = false;
  }
  handleScrolling = event => {
    if (this.state.isLoading) {
      return;
    }
    if (
      window.innerHeight + window.pageYOffset + 200 >=
        document.documentElement.scrollHeight &&
      this._isMounted
    ) {
      this.loadMovies(this.props.currentMovies.page + 1);
    }
  };

  render() {
    const topMargin = this.props.page === "Filter" ? "0" : "70px";

    return (
      <div style={{ marginTop: topMargin }}>
        {this.props.currentMovies.results ? (
          <>
            {this.props.page === "Latest" && (
              <Carousel movies={this.props.currentMovies.results} />
            )}
            <RenderMovies
              page={this.props.page}
              movies={this.props.currentMovies.results}
              resultsPage={this.props.currentMovies.page}
              fetchMovies={this.props.fetchCurrentMovies}
              filtering={this.props.filtering}
              total={this.props.currentMovies.total_results}
            />
          </>
        ) : (
          <>
            <Carousel movies={this.props.currentMovies.results} />
            <RenderMovies initialLoad={true} />
          </>
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
