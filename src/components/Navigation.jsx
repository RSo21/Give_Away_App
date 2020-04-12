import React from "react";
import {Link} from "react-router-dom";


const Navigation  = () => {

    return(
        <div className = "navigation">
            <Link to="/Give_Away_App">Start</Link>
            <a href = "#howWork">How we work?</a>
            <a href = "#about">About Us</a>
            <a href = "#help">Foundation and organizations</a>
            <a href = "#contact">Contact</a>
        </div>
    )
}

export default Navigation;