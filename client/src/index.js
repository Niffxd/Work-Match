/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/normalize.css";
import "./styles/index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const { domain, clientId } = process.env;

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
