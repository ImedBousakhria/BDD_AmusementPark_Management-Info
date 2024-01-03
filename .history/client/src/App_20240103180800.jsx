import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn.jsx";
import SignUp from "./Signup.jsx"
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import Schedule from "./Schedule.jsx";
import Dashboard from "./Dashboard.jsx";
import HomeLayout from "./components/super/HomeLayout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeLayout pageComponent={}<LandingPage />}></Route>
        <Route path={"/Signup"} element={<SignUp />}></Route>
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
