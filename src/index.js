import React from 'react'
import { render } from 'react-dom'
import { AppContextProvider } from './contexts/AppContext'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
)
