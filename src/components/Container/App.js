import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import { fetchCurrentMovies } from "../../actions";
import ScrollToTop from "../../helpers/ScrollToTop";
import { ThemeProvider } from "styled-components";
import WrapperAnimations from "../../helpers/WrapperAnimations";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  SideMenu,
  MovieDetails,
  SearchPage,
  ActorDetails
} from "../../helpers/LazyLoadingStuff";
import { Global } from "../../helpers/Global";
import Header from "../Presentational/Header";
const initialMode = localStorage.getItem("mode") === "true";
const initialAccent = localStorage.getItem("accent") || "red";

const App = props => {
  const [mode, setMode] = useState(initialMode);
  const [accent, setAccent] = useState(initialAccent);

  const changeMode = () => {
    localStorage.setItem("mode", !mode);
    setMode(!mode);
  };
  const changeAccent = color => {
    localStorage.setItem("accent", color);
    setAccent(color);
  };

  const { location } = props;

  return (
    <ThemeProvider
      theme={{
        mode: mode ? "light" : "dark",
        accent: accent
      }}
    >
      <WrapperAnimations>
        <Global />
        <ScrollToTop>
          <SideMenu changeAccent={changeAccent} changeMode={changeMode} />
          <Header />
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames={"fade"}
            >
              <section className="route-section">
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={props => <CurrentMovies {...props} page="Latest" />}
                  />
                  <Route
                    path="/latest"
                    render={props => <CurrentMovies {...props} page="Latest" />}
                  />
                  <Route
                    path="/top"
                    render={props => (
                      <CurrentMovies {...props} page="Top rated" />
                    )}
                  />
                  <Route
                    path="/popular"
                    render={props => (
                      <CurrentMovies {...props} page="Popular" />
                    )}
                  />
                  <Route
                    path="/upcoming"
                    render={props => (
                      <CurrentMovies {...props} page="Upcoming" />
                    )}
                  />
                  <Route path="/filter" component={SearchPage} />
                  <Route path="/movies/:id" component={MovieDetails} />
                  <Route path="/actors/:id" component={ActorDetails} />
                  <Route
                    path="/search"
                    render={props => (
                      <CurrentMovies
                        {...props}
                        movies={props.foundMovies}
                        page="Found"
                      />
                    )}
                  />
                  <Route component={CurrentMovies} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </ScrollToTop>
      </WrapperAnimations>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return { foundMovies: state.searchResults };
};

export default connect(
  mapStateToProps,
  { fetchCurrentMovies }
)(withRouter(App));
