import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCurrentMovies } from "../../actions";
import RenderMovies from "../Presentational/RenderMovies";
import useUnmounted from "../../helpers/useUnmounted";
import _throttle from "lodash/throttle";
import Carousel from "../Presentational/Carousel";
const CurrentMovies = ({
  currentMovies,
  page,
  filtering,
  fetchCurrentMovies
}) => {
  const [fetching, setIsFetching] = useState(false);
  const unmounted = useUnmounted();
  useEffect(() => {
    loadMovies();
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [page, filtering]);

  useEffect(() => {
    if (!fetching) {
      return;
    }
    fetchMoreMovies();
  }, [fetching]);

  const loadMovies = () => {
    fetchCurrentMovies(page, 1, filtering);
  };

  const throttledScroll = () => {
    return _throttle(handleScrolling, 300)();
  };

  const fetchMoreMovies = async () => {
    await fetchCurrentMovies(page, currentMovies.page + 1, filtering);
    setIsFetching(false);
  };
  const handleScrolling = event => {
    if (fetching) {
      return;
    }

    if (
      window.innerHeight + window.pageYOffset + 200 >=
        document.documentElement.scrollHeight &&
      !unmounted.current
    ) {
      setIsFetching(true);
    }
  };

  const topMargin = page === "Filter" ? "0" : "70px";
  return (
    <div style={{ marginTop: topMargin }}>
      <Carousel movies={currentMovies} />
      {currentMovies.results ? (
        <RenderMovies
          page={page}
          movies={currentMovies.results}
          resultsPage={currentMovies.page}
          fetchMovies={fetchCurrentMovies}
          filtering={filtering}
          total={currentMovies.total_results}
        />
      ) : (
        <RenderMovies initialLoad={true} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { currentMovies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchCurrentMovies }
)(CurrentMovies);
