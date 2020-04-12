import React from "react";
import {Link} from "react-router-dom";
import LogElements from "./LogElements";
import Navigation from "./Navigation";
// import HeaderPhoto from "../assets/Home-Hero-Image.jpg";
import Decoration from "../assets/Decoration.svg"


const HomeHeader  = () => {

    return(
        <header className = "header-container">
            <div className = "header-photo">
                {/* <img src = {HeaderPhoto} alt = "headerPhoto" /> */}
            </div>
            <div className = "header-content">
                <LogElements />
                <Navigation />
                <div className = "header-content-text">
                    <h1>Start Helping!</h1>
                    <p>Donate unnecessary things to trusted hands!</p>
                    <img className = "decoration" src = {Decoration} alt = "decoration"/>
                    
                    <div className = "header-content-btn">
                        <Link to="/login"><button className = "header-content-btn-left">DONATE <br/>THINGS</button></Link>
                        <Link to="/login"><button className = "header-content-btn-right">ORGANIZE <br/>A COLLECTION</button></Link>
                    </div>

                </div>
            </div>
        </header>
    )


}

export default HomeHeader;