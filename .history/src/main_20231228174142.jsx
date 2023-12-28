import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './LandingPage.jsx'
import ScheduleBeta from './ScheduleBeta.jsx'
import Dashboard from './Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScheduleBeta />
  </React.StrictMode>,
)
