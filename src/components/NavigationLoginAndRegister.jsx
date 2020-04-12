import React from "react";
import {Link} from "react-router-dom";


const NavigationLoginAndRegister  = () => {

    return(
        <div className = "navigation">
            <Link to="/">Start</Link>
            <Link to="/">How we work?</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Foundation and organizations</Link>
            <Link to="/">Contact</Link>
        </div>
    )
}

export default NavigationLoginAndRegister;