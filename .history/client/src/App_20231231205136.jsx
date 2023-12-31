import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn.jsx";
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import Schedule from "./Schedule.jsx";
import Dashboard from "./Dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />}></Route>
        <Route path={"/Signup"} element={<Sign />}></Route>
        <Route path={"/Signin"} element={<SignIn />}></Route>
        <Route path={"/Schedule"} element={<Schedule />}></Route>
        <Route path={"/Dashboard"} element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
