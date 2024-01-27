import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn.jsx";
import SignUp from "./Signup.jsx";
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import VisitorPage from "./VisitorPage.jsx";

import Schedule from "./Schedule.jsx";
import Dashboard from "./Dashboard.jsx";
import HomeLayout from "./components/super/HomeLayout.jsx";
import Attractions from "./Attractions.jsx";
import Event from "./Event.jsx";
import Stall from "./Stall.jsx";
import Staff from "./Staff.jsx";
import Map from "./Map.jsx";
import Profile from "./components/super/Profile.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/visitor"} element={<VisitorPage />} />

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
        <Route path={"/Visitor"} element={<LandingPage visitor={true} />} />
        <Route
          path={"/Event"}
          element={<HomeLayout pageComponent={<Event />} />}
        />
        <Route
          path={"/Stall"}
          element={<HomeLayout pageComponent={<Stall />} />}
        />
        <Route
          path={"/Staff"}
          element={<HomeLayout pageComponent={<Staff />} />}
        />
        <Route
          path={"/Settings"}
          element={<HomeLayout pageComponent={<Staff />} />}
        />
        <Route path={"/Map"} element={<HomeLayout pageComponent={<Map />} />} />
        <Route
          path={"/profile/:id"}
          element={<HomeLayout pageComponent={<Profile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
