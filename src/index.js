import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import App from "./components/Smart Components/App";
import reducers from "./reducers";
import { BrowserRouter } from "react-router-dom";
const AppStore = createStore(reducers, applyMiddleware(thunk));
serviceWorker.register();

const MovieApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
ReactDOM.render(
  <Provider store={AppStore}>
    <MovieApp />
  </Provider>,
  document.querySelector("#root")
);
