import React from "react";
// import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/home';
import Donate from './pages/Donate/donate';
import Wheels from "./pages/Wheels/MegaMillions/megaMillions";
import HowItWork from "./pages/HowItWork/howItWork";
import Contact from "./pages/Contact/Contact";

function App() {
  return (    

    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/wheels" element={<Wheels />} />
        <Route path="/howItWork" element={<HowItWork />} />     
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>

   );
}

export default App;