import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import App from "./components/Smart Components/App";
import reducers from "./reducers";

import { action as toggleMenu } from "redux-burger-menu";
const store = createStore(reducers, applyMiddleware(thunk));
const isOpen = true;
store.dispatch(toggleMenu(isOpen));
serviceWorker.register();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
