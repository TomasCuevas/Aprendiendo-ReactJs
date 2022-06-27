import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";
import { PokemonApp } from "./PokemonApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PokemonApp />
  </Provider>
);
