import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn.jsx";
import SignUp from "./Signup.jsx";
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import Schedule from "./Schedule.jsx";
import Dashboard from "./Dashboard.jsx";
import HomeLayout from "./components/super/HomeLayout.jsx";
import Attractions from "./Attractions.jsx"
import Event from "./Event.jsx"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />

        <Route path={"/Signup"} element={<SignUp />} />
        <Route path={"/Signin"} element={<SignIn />} />
        <Route
          path={"/Schedule"}
          element={<HomeLayout pageComponent={<Schedule />} />}
        />
        <Route
          path={"/Home"}
          element={<HomeLayout pageComponent={<Dashboard />} />}
        />
        <Route
          path={"/Attraction"}
          element={<HomeLayout pageComponent={<Attractions />} />}
        />
        <Route
          path={"/Stall"}
          element={<HomeLayout pageComponent={<Event />} />}
        />
        <Route
          path={"/Event"}
          element={<HomeLayout pageComponent={<Dashboard />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
