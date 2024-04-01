import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./Components/Sidebar";

import classes from "./App.module.css";
import HomePage from "./Pages/Home";
import PageTopCom from "./Components/PageTopCom";
import React, { useState } from "react";
import CommonPage from "./Pages/CommonPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className={classes.rootContainer}>
        <Sidebar />

        <div className={classes.pageContainer}>
          <PageTopCom />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/organization"
              element={<CommonPage pageTitle={"Organization"} />}
            />
            <Route
              path="/assets"
              element={<CommonPage pageTitle={"Assets"} />}
            />
            <Route path="/trade" element={<CommonPage pageTitle={"Trade"} />} />
            <Route
              path="/history"
              element={<CommonPage pageTitle={"History"} />}
            />
            <Route
              path="/wallet"
              element={<CommonPage pageTitle={"Wallet"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
