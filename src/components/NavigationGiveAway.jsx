import React, { Component } from 'react';
import {Link} from "react-router-dom";

import MenuIcon from "../assets/menu.png";

import { slide as Menu } from "react-burger-menu";


class NavigationGiveAway extends Component {

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
                        <span className = "hello-mobile">Hello {sessionStorage.getItem("email")}</span>
                        <div><img className = "icon-menu" src = {MenuIcon} alt = "menuIcon"/> 
                        </div>
                        <Menu className = "menu-mobile" pageWrapId={"page-wrap"} isOpen={true} width={ 200 }>
                            <p activeclass="active" spy="true" offset={50} duration={500}>
                                <Link to="/Give_Away_App">Start</Link>
                            </p>
                            <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                                <a href = "#giveAway">Give Away Start</a>
                            </p>
                            <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                                <a href = "#form">Fill the Form</a>
                            </p>
                            <p activeclass="active" to="start" spy="true" offset={50} duration={500}>
                                <a href = "#contact">Contact</a>
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
                    <a href = "#giveAway">Give Away Start</a>
                    <a href = "#form">Fill the Form</a>
                    <a href = "#contact">Contact</a>
                </div>
                )
            }
        }
}

export default NavigationGiveAway;