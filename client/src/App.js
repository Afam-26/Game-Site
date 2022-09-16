import React from "react";
// import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/home';
// import Main from './pages/Main/Main';
// import AboutMe from "./pages/AboutMe/AboutMe";
// import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (    

    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />      */}
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>

   );
}

export default App;