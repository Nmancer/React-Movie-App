import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import { connect } from "react-redux";
import ScrollToTop from "../../helpers/ScrollToTop";
import { ThemeProvider } from "styled-components";
import {
  SideMenu,
  MovieDetails,
  SearchPage,
  ActorDetails
} from "../../helpers/LazyLoadingStuff";
import { Global } from "../../helpers/Global";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ThemeProvider
          theme={{
            mode: this.props.theme.currentTheme ? `light` : `dark`,
            accent: this.props.accent.currentAccent
          }}
        >
          <React.Fragment>
            <Global />
            <ScrollToTop>
              <SideMenu />
              <Header />
              <Switch>
                <Route exact={true} path="/" component={CurrentMovies} />
                <Route
                  path="/top"
                  render={props => (
                    <CurrentMovies {...props} page="Top rated" />
                  )}
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
                <Route
                  path="/search"
                  render={props => (
                    <CurrentMovies
                      {...props}
                      movies={this.props.results}
                      page="Found"
                    />
                  )}
                />
                <Route component={CurrentMovies} />
              </Switch>
            </ScrollToTop>
          </React.Fragment>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    results: state.searchResults,
    theme: state.changeTheme,
    accent: state.accentColor
  };
};
export default connect(
  mapStateToProps,
  null
)(App);
