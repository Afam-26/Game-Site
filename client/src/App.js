import React from 'react';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import './App.css';
import Nav from './components/Nav/nav';
import Home from './pages/Home/home';
// import How_it_work from './pages/Home/how_it_work';
// import Wheel from './pages/Home/wheel';
// import Donate from './pages/Home/donate';
import Contact from './pages/Contact/contact';



function App() {
  return (

    <BrowserRouter>
      <Nav />
          <Routes>
          <Route exact path="/home" element ={<Home/>}></Route>
          {/* <Route exact path="/how_it_work" component ={How_it_work}></Route>
          <Route exact path="/wheel" component ={Wheel}></Route>
          <Route exact path="/donate" component ={Donate}></Route> */}
          <Route exact path="/contact" element ={<Contact/>}></Route>          
          
          </Routes>
       
        
    </BrowserRouter>










    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
