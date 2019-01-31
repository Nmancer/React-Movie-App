import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import { connect } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import {
  SideMenu,
  MovieDetails,
  SearchPage,
  ActorDetails,
  SearchResults
} from "../LazyLoadingStuff";
import "../../Styles/App.css";
import Header from "./Header";

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
            <SideMenu />

            <Header />

            <Switch>
              <Route exact path="/" component={CurrentMovies} />
              <Route
                path="/top"
                render={props => <CurrentMovies {...props} page="Top rated" />}
              />
              <Route
                path="/popular"
                render={props => <CurrentMovies {...props} page="Popular" />}
              />
              <Route
                path="/upcoming"
                render={props => <CurrentMovies {...props} page="Upcoming" />}
              />

              <Route path="/filter" component={SearchPage} />
              <Route path="/movies/:id" component={MovieDetails} />
              <Route path="/actors/:id" component={ActorDetails} />
              <Route path="/search/" component={SearchResults} />

              <Route component={CurrentMovies} />
            </Switch>
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
