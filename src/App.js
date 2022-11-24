import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./views/Home";
import Air from "./views/Air";
import Car from "./views/Car";
import Dna from "./views/Dna";
import Ship from "./views/Ship";
import Wind from "./views/Wind";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} >
                <Route path="/air" element={<Air />} />
                <Route path="/car" element={<Car />} />
                <Route path="/dna" element={<Dna />} />
                <Route path="/ship" element={<Ship />} />
                <Route path="/wind" element={<Wind />} />
              </Route>
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
