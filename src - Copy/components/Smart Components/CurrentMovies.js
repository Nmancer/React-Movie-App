import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentMovies } from "../../actions";
import RenderMovies from "../Dumb Components/RenderMovies";
import DemoCarousel from "./DemoCarousel";

class CurrentMovies extends Component {
  _isMounted = false;
  componentDidMount() {
    // window.addEventListener("scroll", this.handleScrolling);
    this.props.fetchCurrentMovies(this.props.page, 1, this.props.filtering);
    // this._isMounted = true;
  }
  componentDidUpdate(prevProps) {
    if (this.props.filtering !== prevProps.filtering) {
      this.props.fetchCurrentMovies(this.props.page, 1, this.props.filtering);
    }
  }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScrolling);
  //   this._isMounted = false;
  // }
  // handleScrolling = event => {
  //   if (
  //     window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
  //     this._isMounted
  //   ) {
  //     this.props.fetchCurrentMovies(
  //       this.props.page,
  //       this.props.currentMovies.page + 1,
  //       this.props.filtering
  //     );
  //   }
  // };

  render() {
    const loading = this.props.currentMovies.results ? true : false;
    return (
      <React.Fragment>
        {loading ? (
          <React.Fragment>
            {this.props.page === "Filter" ? null : <DemoCarousel />}
            <RenderMovies
              page={this.props.page}
              movies={this.props.currentMovies.results}
              resultsPage={this.props.currentMovies.page}
              fetchMovies={this.props.fetchCurrentMovies}
              filtering={this.props.filtering}
              total={this.props.currentMovies.total_results}
            />
          </React.Fragment>
        ) : null}
      </React.Fragment>
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
