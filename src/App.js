import React from "react";
import { Router, Route, Routes, Outlet } from "react-router";

import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );

  function Layout() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default App;
