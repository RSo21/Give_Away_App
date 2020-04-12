import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LogElements from '../components/LogElements';
import Decoration from "../assets/Decoration.svg"
import NavigationLoginAndRegister from '../components/NavigationLoginAndRegister';



class LogOut extends Component{
    render(){
        return(
            <>
                <LogElements/>
                <NavigationLoginAndRegister />
                    <div className = "logout">
                        <p>Logged out successfully!</p>
                        <img className = "decoration" src = {Decoration} alt = "decoration"/>
                        <Link to="/Give_Away_App"><button>Home</button> </Link>
                    </div>
            </>
        );
    }
}
export default LogOut;