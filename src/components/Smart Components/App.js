import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import CurrentMovies from "./CurrentMovies";
import ScrollToTop from "../../helpers/ScrollToTop";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  SideMenu,
  MovieDetails,
  SearchPage,
  ActorDetails
} from "../../helpers/LazyLoadingStuff";
import { Global } from "../../helpers/Global";
import Header from "../Dumb Components/Header";

class App extends React.Component {
  state = { mode: true, accent: "red" };
  changeMode = () => {
    this.setState({ mode: !this.state.mode });
  };
  changeAccent = color => {
    this.setState({ accent: color });
  };
  render() {
    return (
      <ThemeProvider
        theme={{
          mode: this.state.mode ? "light" : "dark",
          accent: this.state.accent
        }}
      >
        <Wrapper>
          <Global />
          <ScrollToTop>
            <SideMenu
              changeAccent={this.changeAccent}
              changeMode={this.changeMode}
            />
            <Header
              changeAccent={this.changeAccent}
              changeMode={this.changeMode}
            />
            <TransitionGroup>
              <CSSTransition
                key={this.props.location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={"fade"}
              >
                <section className="route-section">
                  <Switch location={this.props.location}>
                    <Route exact path="/" component={CurrentMovies} />
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
                          movies={this.props.results}
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
        </Wrapper>
      </ThemeProvider>
    );
  }
}
const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(App);
