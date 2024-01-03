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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={<HomeLayout pageComponent={<LandingPage />} />}
        />
        <Route
          path={"/Signup"}
          element={<HomeLayout pageComponent={<SignUp />} />}
        />
        <Route path={"/Signin"} element={<HomeLayout pageComponent={SignIn} />}></Route>
        <Route path={"/Schedule"} element={<HomeLayout pageComponent={Schedule} /> }></Route>
        <Route path={"/Dashboard"} element={<HomeLayout pageComponent={Dashboard}>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
