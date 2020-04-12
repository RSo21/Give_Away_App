import React from "react";
import {Link} from "react-router-dom";


const NavigationLoginAndRegister  = () => {

    return(
        <div className = "navigation">
            <Link to="/Give_Away_App">Start</Link>
            <Link to="/Give_Away_App">How we work?</Link>
            <Link to="/Give_Away_App">About Us</Link>
            <Link to="/Give_Away_App">Foundation and organizations</Link>
            <Link to="/Give_Away_App">Contact</Link>
        </div>
    )
}

export default NavigationLoginAndRegister;