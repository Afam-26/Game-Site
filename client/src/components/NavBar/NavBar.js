import React from "react";
import { Link, useLocation } from "react-router-dom";
// import SvgIcon from '@material-ui/core/SvgIcon';

function NavTabs() {  
  const location = useLocation();

//   function HomeIcon(props) {
//         return (
//           <SvgIcon {...props}>
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//           </SvgIcon>
//         );
//         }

  return (

    <ul className="nav nav-tabs justify-content-center ">
       
    <li className="nav-item">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
      Home
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/howItWork" className={location.pathname === "/howItWork" ? "nav-link active" : "nav-link"}
      >
        How_it_work
      </Link>
    </li>

   
    <li className="nav-item">
      <Link to="/wheel" className={location.pathname === "/wheel" ? "nav-link active" : "nav-link"}
      >
        Wheel
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/donate" className={location.pathname === "/donate" ? "nav-link active" : "nav-link"}
      >
        Donate
      </Link>
    </li>   

    <li className="nav-item">
      <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </Link>
    </li>   
  </ul>





    // <ul className="nav nav-tabs justify-content-center ">
    //     {/* <HomeIcon href="/" /> */}
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //     Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/about"
    //       className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/projects"
    //       className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
    //     >
    //       Projects
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact"
    //       className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </Link>
    //   </li>     
    // </ul>
  );
}

export default NavTabs;
