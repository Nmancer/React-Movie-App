import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import { connect } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import {
  SideMenu,
  MovieDetails,
  TopMovies,
  PopularMovies,
  UpcomingMovies,
  SearchPage,
  ActorDetails
} from "../LazyLoadingStuff";
import "../../Styles/App.css";

class App extends React.Component {
  state = {};
  // contentRef = React.createRef();
  // componentDidUpdate = prevProps => {
  //   if (this.props.burgerMenu.isOpen !== prevProps.burgerMenu.isOpen) {
  //     this.contentRef.classList.toggle("burgerSlider");
  //   }
  // };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ScrollToTop>
            <div id="outer-container">
              <SideMenu />
              <div
                id="page-wrap"
                className={this.props.burgerMenu.isOpen ? "burgerSlide" : null}
              >
                <Switch>
                  <Route exact path="/" component={CurrentMovies} />
                  <Route path="/top" component={TopMovies} />
                  <Route path="/popular" component={PopularMovies} />
                  <Route path="/upcoming" component={UpcomingMovies} />
                  <Route path="/filter" component={SearchPage} />
                  <Route path="/movies/:id" component={MovieDetails} />
                  <Route path="/actors/:id" component={ActorDetails} />
                  <Route component={CurrentMovies} />
                </Switch>
              </div>
            </div>
          </ScrollToTop>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { burgerMenu: state.burgerMenu };
};
export default connect(
  mapStateToProps,
  null
)(App);
