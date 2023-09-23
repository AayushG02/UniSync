import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div id="app">
        <Sidebar />
        <div id="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
