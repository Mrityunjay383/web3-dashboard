import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./Components/Sidebar";

import classes from "./App.module.css";
import HomePage from "./Pages/Home";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className={classes.rootContainer}>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <div className={classes.pageContainer}>
                <HomePage />
              </div>
            }
          />
          <Route path="/organization" element={<div>Organization Page</div>} />
          <Route path="/assets" element={<div>Assets Page</div>} />
          <Route path="/trade" element={<div>Trade Page</div>} />
          <Route path="/history" element={<div>History Page</div>} />
          <Route path="/wallet" element={<div>Wallet Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
