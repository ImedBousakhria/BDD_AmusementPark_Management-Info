import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import LandingPage from './LandingPage.jsx'
import Schedule from './Schedule.jsx'
import Dashboard from './Dashboard.jsx'

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          <Route path={"/Sign"} element={<App />}></Route>
          <Route path={"/Schedule"} element={<Schedule />}></Route>
          <Route path={"/Schedule"} element={<Schedule />}></Route>



        </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
