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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {
  const ScrollToTop=()=> {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
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
          <Footer />
      </Router>
    </div>
  );
}

export default App;

