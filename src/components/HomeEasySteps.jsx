import React from "react";
import Decoration from "../assets/Decoration.svg"


const EasySteps  = () => {

    return(
        <div className = "easy-steps" id = "howWork">
            <p>Only 4 easy steps</p>
            <img className = "decoration" src = {Decoration} alt = "decoration"/>  
        </div>
        
    )


}

export default EasySteps;