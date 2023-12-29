import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './LandingPage.jsx'
import Schedule from './Schedule.jsx'
import Dashboard from './Dashboard.jsx'

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/Sign"} element={<Sign />}></Route>
          <Route path={"/Home"} element={<MainApp />}></Route>


        </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
