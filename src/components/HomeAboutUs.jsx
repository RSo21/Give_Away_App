import React from "react";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";



const AboutUs  = () => {

    return(
        <div className = "about-us">
            <div className = "about-us-text">
                <p id = "about">About Us</p>
                <img className = "decoration" src = {Decoration} alt = "decoration"/> 
                <p className = "about-us-text-two">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className = "signature" src = {Signature} alt = "signature"/> 
            </div>
            <div className = "about-us-photo"></div>
        </div>
    )


}

export default AboutUs;