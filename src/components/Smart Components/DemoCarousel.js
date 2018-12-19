import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FadeIn from "react-lazyload-fadein";
import "../../Styles/Carousel.css";
import { Carousel } from "react-responsive-carousel";
import Genres from "../../Genres";
class DemoCarousel extends Component {
  render() {
    const loading = this.props.currentMovies.results ? true : false;
    return (
      <div className="carousel-container-container">
        <div className="carousel-container">
          {loading ? (
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              emulateTouch={true}
              swipeable={true}
            >
              <FadeIn height={500}>
                {onload => (
                  <div className="carousel-img-div">
                    <div className="carousel-img-parent">
                      {" "}
                      <img
                        src={`https://image.tmdb.org/t/p/w1280/${
                          this.props.currentMovies.results[0].backdrop_path
                        }`}
                        alt=""
                        onLoad={onload}
                      />
                    </div>

                    <div className="carousel-info">
                      <h2 className="carousel-header">
                        {this.props.currentMovies.results[0].title}
                      </h2>
                      <h3>
                        {this.props.currentMovies.results[0].genre_ids
                          .slice(0, 3)
                          .map(genre => {
                            return Genres.get(genre) + " ";
                          })}
                      </h3>
                      <p className="carousel-header">
                        {this.props.currentMovies.results[0].overview.length >
                        250
                          ? this.props.currentMovies.results[0].overview.slice(
                              0,
                              250
                            ) + " ..."
                          : this.props.currentMovies.results[0].overview}
                      </p>

                      <Link
                        to={`/movies/${this.props.currentMovies.results[0].id}`}
                        key={this.props.currentMovies.results[0].id}
                      >
                        <button>Read More!</button>
                      </Link>
                    </div>
                  </div>
                )}
              </FadeIn>

              <FadeIn height={500}>
                {onload => (
                  <div className="carousel-img-div">
                    <div className="carousel-img-parent">
                      {" "}
                      <img
                        src={`https://image.tmdb.org/t/p/w1280/${
                          this.props.currentMovies.results[1].backdrop_path
                        }`}
                        alt=""
                        onLoad={onload}
                      />
                    </div>

                    <div className="carousel-info">
                      <h2 className="carousel-header">
                        {this.props.currentMovies.results[1].title}
                      </h2>
                      <h3>
                        {this.props.currentMovies.results[1].genre_ids
                          .slice(0, 3)
                          .map(genre => {
                            return Genres.get(genre) + " ";
                          })}
                      </h3>
                      <p className="carousel-header">
                        {this.props.currentMovies.results[1].overview.length >
                        250
                          ? this.props.currentMovies.results[1].overview.slice(
                              0,
                              250
                            ) + " ..."
                          : this.props.currentMovies.results[1].overview}
                      </p>

                      <Link
                        to={`/movies/${this.props.currentMovies.results[1].id}`}
                        key={this.props.currentMovies.results[1].id}
                      >
                        <button>Read More!</button>
                      </Link>
                    </div>
                  </div>
                )}
              </FadeIn>
              <FadeIn height={500}>
                {onload => (
                  <div className="carousel-img-div">
                    <div className="carousel-img-parent">
                      {" "}
                      <img
                        src={`https://image.tmdb.org/t/p/w1280/${
                          this.props.currentMovies.results[2].backdrop_path
                        }`}
                        alt=""
                        onLoad={onload}
                      />
                    </div>

                    <div className="carousel-info">
                      <h2 className="carousel-header">
                        {this.props.currentMovies.results[2].title}
                      </h2>
                      <h3>
                        {this.props.currentMovies.results[2].genre_ids
                          .slice(0, 3)
                          .map(genre => {
                            return Genres.get(genre) + " ";
                          })}
                      </h3>
                      <p className="carousel-header">
                        {this.props.currentMovies.results[2].overview.length >
                        250
                          ? this.props.currentMovies.results[2].overview.slice(
                              0,
                              250
                            ) + " ..."
                          : this.props.currentMovies.results[2].overview}
                      </p>

                      <Link
                        to={`/movies/${this.props.currentMovies.results[2].id}`}
                        key={this.props.currentMovies.results[2].id}
                      >
                        <button>Read More!</button>
                      </Link>
                    </div>
                  </div>
                )}
              </FadeIn>
            </Carousel>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { currentMovies: state.movies };
};
export default connect(mapStateToProps)(DemoCarousel);
