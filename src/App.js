import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";

import Home from "./views";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
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
