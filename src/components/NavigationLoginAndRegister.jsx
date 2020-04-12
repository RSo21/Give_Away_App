import React from "react";
import {Link} from "react-router-dom";


const NavigationLoginAndRegister  = () => {

    return(
        <div className = "navigation">
            <Link to="/GiveAwayApp">Start</Link>
            <Link to="/GiveAwayApp">How we work?</Link>
            <Link to="/GiveAwayApp">About Us</Link>
            <Link to="/GiveAwayApp">Foundation and organizations</Link>
            <Link to="/GiveAwayApp">Contact</Link>
        </div>
    )
}

export default NavigationLoginAndRegister;