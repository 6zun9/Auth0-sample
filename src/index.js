import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="caboom.us.auth0.com"
    clientId="Tzl0bnUW9efXwWsnCdbE6RUNRYdW1Zff"
    redirectUri={window.location.origin}
    audience="https://caboom.us.auth0.com/api/v2/"
    useRefreshTokens={true}
    cacheLocation="localstorage"
    scope="read:current_user update:current_user_metadata"

  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


