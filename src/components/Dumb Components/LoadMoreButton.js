import React from "react";

export default function LoadMoreButton(props) {
  const { fetchMovies, page, resultsPage, filtering } = props;
  return (
    <div className="load-more">
      {" "}
      <button onClick={() => fetchMovies(page, resultsPage + 1, filtering)}>
        Load More!
      </button>
    </div>
  );
}
