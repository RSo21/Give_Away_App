import React, { Component } from 'react';
import {Link} from "react-router-dom";
import MenuIcon from "../assets/menu.png";

import { slide as Menu } from "react-burger-menu";


class LogElements  extends Component {

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


    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    endSession = () => {
        sessionStorage.clear();
    };

    render(){

        const { width } = this.state;
        const isMobile = width <= 978;

        if(isMobile && sessionStorage.getItem("email") == null){
            return(
                <header className = "page-header-mobile">
                    <div><img className = "icon-menu" src = {MenuIcon} alt = "menuIcon" menuClicked={this.handleClick}/> 
                     </div>
                    <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 200 }>
                    <p activeclass="active" spy="true" offset={50} duration={500}>
                        <Link to="/">Start</Link>
                    </p>
                    <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <a href = "#howWork">How we work?</a>
                    </p>
                    <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <a href = "#about">About Us</a>
                    </p>
                    <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <a href = "#help">Foundation and organizations</a>
                    </p>
                    <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <a href = "#contact">Contact</a>
                    </p>
                    <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <Link to="/login">Sign In</Link>
                    </p>
                    <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                        <Link to="/register" className = "nav-register">Register</Link>
                    </p>
                    </Menu>
                </header>

            )
        }else if (isMobile){
            return(
                <header className = "page-header-mobile">
                    <div><i className = "icon-menu" menuClicked={this.handleClick}></i> 
                    </div>
                    <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 200 }>
                        <p activeclass="active" spy="true" offset={50} duration={500}>
                            <Link to="/">Start</Link>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                            <a href = "#howWork">How we work?</a>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                            <a href = "#about">About Us</a>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                            <a href = "#help">Foundation and organizations</a>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                            <a href = "#contact">Contact</a>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                            <button className = "log-el-btn-first"><Link to="/giveaway">Give Away</Link></button>
                        </p>
                        <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                            <button className = "log-el-btn-second"><Link to="/logout" onClick={this.endSession}>Log Out</Link></button>
                        </p>
                    </Menu>
            </header>

            )
        
    }else if (sessionStorage.getItem("email") == null) {

            return(
                <div className = "log-elements">
                    <button className = "log-el-btn-first"><Link to="/login">Sign In</Link></button>
                    <button className = "log-el-btn-second"><Link to="/register">Register</Link></button>
                </div>
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


export default LogElements;