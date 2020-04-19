import React, { Component } from 'react';
import {Link} from "react-router-dom";

class LogElementsGiveAway  extends Component {
    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    endSession = () => {
        sessionStorage.clear();
    };

    render(){

        const { width } = this.state;
        const isMobile = width <= 978;
        
        if (isMobile){
            return(
                <header className = "page-header-mobile">
                </header>
            )

    } else{
            return(
                <div className = "log-elements">
                    <span>Hello {sessionStorage.getItem("email")}</span>
                    <button className = "log-el-btn-first"><Link to="/giveaway">Give Away</Link></button>
                    <button className = "log-el-btn-second"><Link to="/logout" onClick={this.endSession}>Log Out</Link></button>
                </div>
            )
        }
    }
}

export default LogElementsGiveAway;