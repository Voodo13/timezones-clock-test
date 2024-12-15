import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { appStore } from "./stores/appStore.js";
import App from "./app/App.jsx";

const CLOCK_COUNT = 2;

const root = createRoot(document.getElementById("app"));
root.render(
  <Provider store={appStore}>
    <App clockCount={CLOCK_COUNT} />
  </Provider>
);
