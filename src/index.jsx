import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureRootTheme } from "@yandex/ui/Theme";
import { theme } from "@yandex/ui/Theme/presets/default";
import { ToastContainer } from "react-toastify";

import App from "./App";
import { store } from "./Store/Store";

import "./index.scss";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "reactjs-popup/dist/index.css";

configureRootTheme({ theme });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        closeButton={false}
      />
      <App />
    </HashRouter>
  </Provider>
);
