import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
class DemoCarousel extends Component {
  _onImageClick = event => {
    this.props.history.push(
      `/movies/${
        this.props.currentMovies.results[this._imageGallery.getCurrentIndex()]
          .id
      }`
    );
  };
  render() {
    const images = [
      {
        original: `https://image.tmdb.org/t/p/w1280/${
          this.props.currentMovies.results[0].backdrop_path
        }`,
        description: this.props.currentMovies.results[0].title
      },

      {
        original: `https://image.tmdb.org/t/p/w1280/${
          this.props.currentMovies.results[1].backdrop_path
        }`,
        description: this.props.currentMovies.results[1].title
      },
      {
        original: `https://image.tmdb.org/t/p/w1280/${
          this.props.currentMovies.results[2].backdrop_path
        }`,
        description: this.props.currentMovies.results[2].title
      },
      {
        original: `https://image.tmdb.org/t/p/w1280/${
          this.props.currentMovies.results[3].backdrop_path
        }`,
        description: this.props.currentMovies.results[3].title
      },
      {
        original: `https://image.tmdb.org/t/p/w1280/${
          this.props.currentMovies.results[4].backdrop_path
        }`,
        description: this.props.currentMovies.results[4].title
      }
    ];

    return (
      <div className="carouselParent">
        <ImageGallery
          ref={i => (this._imageGallery = i)}
          items={images}
          showFullscreenButton
          lazyLoad={true}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          onClick={this._onImageClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentMovies: state.movies };
};
export default withRouter(connect(mapStateToProps)(DemoCarousel));
