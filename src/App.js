import "./App.css";
import { Home } from "./pages/Home";
import { Aboutus } from "./pages/Aboutus";
import { Tutorial } from "./pages/Tutorial";
import { Port } from "./pages/Port";
import { CreatePortTutorial } from "./subpages/CreatePortTutorial";
import { CreatePort } from "./subpages/CreatePort";
import { FinanceSheetList } from "./pages/FinanceSheetList";
import { FinanceSheet } from "./subpages/FinanceSheet";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/port" element={<Port />} />
          <Route
            path="/tutorial/create-port-tutorial"
            element={<CreatePortTutorial />}
          />
          <Route path="/port/create-port" element={<CreatePort />} />
          <Route path="/financeSheetlist" element={<FinanceSheetList />} />
          <Route
            path="/financeSheetlist/financeSheet"
            element={<FinanceSheet />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// ul 클릭하면 view 상태를 반대로
