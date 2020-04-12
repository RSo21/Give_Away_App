import React from "react";
import {Link} from "react-router-dom";

const DonateThings  = () => {

    return(
        <div className = "donate-things">
            <Link to="/login"><button className = "donate-things-btn">DONATE<br/>THINGS</button></Link>
        </div>
    )


}

export default DonateThings;