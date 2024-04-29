import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      // domain="dev-43nhya11ppua14ek.us.auth0.com"
      // clientId="VGfeomIefsfRpUakRJtJZoFkeX37opPA"
      domain='dev-xo1yhc8oq62h1s0d.us.auth0.com' 
      clientId='4bRmI63JJX2tQNhYXwE2G2HFmlKd2Z4B'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
