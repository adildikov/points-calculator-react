import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/fonts.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "@models/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
