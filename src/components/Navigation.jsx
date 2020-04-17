import React, { Component } from 'react';
import {Link} from "react-router-dom";

import MenuIcon from "../assets/menu.png";

import { slide as Menu } from "react-burger-menu";


class Navigation extends Component {

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

        if(isMobile && sessionStorage.getItem("email") == null){
            return(
                <header className = "page-header-mobile">
                    <div><img className = "icon-menu" src = {MenuIcon} alt = "menuIcon"/> 
                     </div>
                    <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 200 }>
                    <p activeclass="active" spy="true" offset={50} duration={500}>
                        <Link to="/Give_Away_App">Start</Link>
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
                        <span className = "hello-mobile">Hello {sessionStorage.getItem("email")}</span>
                        <div><img className = "icon-menu" src = {MenuIcon} alt = "menuIcon"/> 
                        </div>
                        <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 200 }>
                            <p activeclass="active" spy="true" offset={50} duration={500}>
                                <Link to="/Give_Away_App">Start</Link>
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
                                <Link to="/giveaway">Give Away</Link>
                            </p>
                            <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                                <Link to="/logout" onClick={this.endSession}>Log Out</Link>
                            </p>
                        </Menu>
                </header>
            )
        }else{

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
        }
}

export default Navigation;