import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'

const domain = import.meta.env.VITE_REACT_APP_DOMAIN
const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID
const redirectUri = window.location.origin;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
  domain={domain}
  clientId={clientID}
  authorizationParams={{
    redirect_uri: redirectUri
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
)
