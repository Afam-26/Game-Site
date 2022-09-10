import React from "react";
import { Link, useLocation } from "react-router-dom";




function Nav(){
    const location = useLocation();
    return (
        <ul className="nav nav-tabs justify-content-center ">
        {/* <HomeIcon href="/" /> */}
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/how_it_work"
          className={location.pathname === "/how_it_work" ? "nav-link active" : "nav-link"}
        >
          How_it_work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/wheel"
          className={location.pathname === "/wheel" ? "nav-link active" : "nav-link"}
        >
          Wheel
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/donate"
          className={location.pathname === "/donate" ? "nav-link active" : "nav-link"}
        >
          Donate
        </Link>
      </li>    
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>   
    </ul>
    )
}

export default Nav;