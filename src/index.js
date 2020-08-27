import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";

import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
