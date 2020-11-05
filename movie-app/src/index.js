import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import thunk from "redux-thunk";

// eslint-disable-next-line no-unused-vars
const looger = (store) => {
  return (next) => {
    return (action) => {
      //console.log("[Middleware] Dispatching", action);
      const result = next(action);
      //console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(looger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

