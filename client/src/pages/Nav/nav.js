import React from "react";
import "./nav.css"
import logo from "../img/filmfriskerlogo.png"


function Nav(){
    return (

        <span className="header">
            <img className="logo" src={logo} alt="" />
        </span>
    )
}

export default Nav;