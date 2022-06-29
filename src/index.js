import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import history from "./utils/history";
import { setAxiosConfig, setAuthToken } from "./utils/axiohelper";
import { Provider } from "react-redux";
import store from "./store";

setAxiosConfig();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
