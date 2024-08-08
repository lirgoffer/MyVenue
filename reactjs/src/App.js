import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home"; // Correcting the import paths
import About from "./pages/about"; // Correcting the import paths
import Contact from "./pages/contact"; // Correcting the import paths
import Login from "./pages/login"; // Correcting the import paths
import Register from "./pages/register";
import Venues from "./pages/venues";
import './App.css';
import { Data } from "./contexApi";
import AddHal from "./pages/AddHal";
import EditingHall from "./pages/EditingHall";
import ConectToHall from "./pages/ConectToHall";
import EditingComment from './pages/EditingComment'


function App() {
  return (
    <Router>
      <Data>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/venues" element={<Venues />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addHall" element={<AddHal />}/>
        <Route path="/aditingHall" element={<EditingHall />}/>
        <Route path="/conectToHall" element={<ConectToHall/>}/>
        <Route path="/editingComment" element={<EditingComment/>}/>

      </Routes>
      <CustomNavbar />
      <Footer />
      </Data>
    </Router>
  );
}

export default App;
