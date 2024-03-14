import { jsx as _jsx } from 'react/jsx-runtime'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from './store'
const persist = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  _jsx(React.StrictMode, {
    children: _jsx(BrowserRouter, {
      children: _jsx(Provider, {
        store: store,
        children: _jsx(ToastProvider, {
          placement: 'top-right',
          autoDismiss: true,
          autoDismissTimeout: 1000,
          children: _jsx(PersistGate, {
            loading: null,
            persistor: persist,
            children: _jsx(App, {})
          })
        })
      })
    })
  })
)
