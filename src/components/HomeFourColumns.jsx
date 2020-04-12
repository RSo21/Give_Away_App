import React from "react";
import IconOne from "../assets/Icon-1.svg";
import IconTwo from "../assets/Icon-2.svg";
import IconThree from "../assets/Icon-3.svg";
import IconFour from "../assets/Icon-4.svg";

const HomeFourColumns  = () => {

    return(
        <div className = "home-four-columns">
            <div className = "home-four-columns-element">
                <img src = {IconOne} alt = "icon1" />
                <p className = "home-four-columns-step">Select items</p>
                <hr></hr>
                <p className = "home-four-columns-things">Clothes, toys, equipment and more</p>
            </div>

            <div className = "home-four-columns-element">
                <img src = {IconTwo} alt = "icon2" />
                <p className = "home-four-columns-step">Pack them</p>
                <hr></hr>
                <p className = "home-four-columns-things">Use a trash bag</p>
            </div>

            <div className = "home-four-columns-element">
                <img src = {IconThree} alt = "icon3" />
                <p className = "home-four-columns-step">Decide whom <br/>you want to help</p>
                <hr></hr>
                <p className = "home-four-columns-things">Pick the trusted place</p>
            </div>

            <div className = "home-four-columns-element">
                <img src = {IconFour} alt = "icon4" />
                <p className = "home-four-columns-step">Order deliveryman</p>
                <hr></hr>
                <p className = "home-four-columns-things">Deliveryman will arrive at any time</p>
            </div>
        </div>
    )
}

export default HomeFourColumns;