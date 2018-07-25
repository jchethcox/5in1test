import React from "react";
import { render } from "react-dom";
import "tachyons";
import { Provider } from "react-redux";
import store from "./store";

import { setColors } from "./action-creators/colors";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(setColors);
