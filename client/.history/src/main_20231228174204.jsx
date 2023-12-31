import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './LandingPage.jsx'
import Schedule from './Schedule.jsx'
import Dashboard from './Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Schedule />
  </React.StrictMode>,
)
