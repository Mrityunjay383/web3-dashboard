import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./Components/Sidebar";

function App() {
  return (
      <Router>
          <ToastContainer />
          <div>
              <Sidebar />
              <Routes>
                  <Route
                      path="/"
                      element={
                          <div>
                              Home
                          </div>
                      }
                  />
                  <Route
                      path="/organization"
                      element={
                          <div>
                              Organization Page
                          </div>
                      }
                  />
                  <Route
                      path="/assets"
                      element={
                          <div>
                              Assets Page
                          </div>
                      }
                  />
                  <Route
                      path="/trade"
                      element={
                          <div>
                              Trade Page
                          </div>
                      }
                  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
