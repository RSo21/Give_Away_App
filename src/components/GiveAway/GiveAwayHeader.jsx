import React from "react";
import LogElements from "../LogElements";
import NavigationLoginAndRegister from "../NavigationLoginAndRegister";
import Decoration from "./../../assets/Decoration.svg"



const GiveAwayHeader  = () => {

    return(
        <>
        <header className = "give-away-container">
            <div className = "give-away-photo">
            </div>
            <div className = "give-away-content">
                <LogElements />
                <NavigationLoginAndRegister />
                <div className = "give-away-content-text">
                    <h1>Give away items</h1>
                    <p>if you don't need them</p>
                    <img className = "decoration" src = {Decoration} alt = "decoration"/>
                    <p>Only 4 easy steps</p>
                    
                    <div className = "give-away-squares">
                        <div className = "square">
                            <p>1</p> 
                            <p>Select items</p>
                        </div>
                        <div className = "square">
                            <p>2</p> 
                            <p>Pack them</p>
                        </div>
                        <div className = "square">
                            <p>3</p> 
                            <p>Pick foundation</p>
                        </div>
                        <div className = "square">
                            <p>4</p> 
                            <p>Order deliveryman</p>
                        </div>
                    </div>

                </div>
            </div>
           
        </header>
         <div className = "header-important">
         <p className = "header-important-title">Important!</p>
         <p className = "header-important-text">Pack all items to be returned in 60l bags. You can find detailed instructions on how to properly pack things <a href = "/" >HERE</a>.</p>
     </div>
     </>
    )


}

export default GiveAwayHeader;