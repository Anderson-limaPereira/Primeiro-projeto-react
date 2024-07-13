import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Globalstyles from './globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyles/>
    <App />
  </React.StrictMode>,
)
