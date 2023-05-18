import "./App.css";
import { Home } from "./pages/Home";
import { Aboutus } from "./pages/Aboutus";
import { Port } from "./pages/Port";
import { FinanceSheet } from "./pages/FinanceSheet";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/port" element={<Port />} />
          <Route path="/financeSheet" element={<FinanceSheet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
