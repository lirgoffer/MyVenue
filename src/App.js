import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/Navbar";
import Home from "./pages/home"; // Correcting the import paths
import About from "./pages/about"; // Correcting the import paths
import Contact from "./pages/contact"; // Correcting the import paths

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
