import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store.ts'
import { SnackbarProvider } from 'notistack'
import Keycloak from 'keycloak-js'
import keycloakConfig from './keycloak-config'
import keycloakService from './keycloak-service.ts'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { initializeIcons } from '@fluentui/react'


// keycloakService.initKeycloak(performRender)

performRender();

function performRender() {
  
  initializeIcons()
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <SnackbarProvider>
          <FluentProvider theme={webLightTheme}>
            <App />
          </FluentProvider>
        </SnackbarProvider>
      </Provider>
    </React.StrictMode>,
  )
}