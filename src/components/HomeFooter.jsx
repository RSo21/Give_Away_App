import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Decoration from "../assets/Decoration.svg"
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";


class HomeFooter  extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: "",
        messageError: "",
        correctData: false
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        const {
            name,
            email,
            message
        } = this.state;

        const nameValidation = /^[A-Z-zóąśłżźćńÓĄŚŁŻŹĆŃ][a-z-zóąśłżźćńÓĄŚŁŻŹĆŃ]{2,}$/i;
        const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (nameValidation.test(name) && emailValidation.test(email) && message.length >= 120){
            this.setState({
                name: "",
                email: "",
                message: "",
                correctData: true
            });

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            headers: {
                "content-type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            }),  
        }).then(resp => resp.json())
            .then(success => {
                if (success.status === "success") {
                    console.log("Code 200", success);
                }
                
            })
            .catch(error => {
                console.log("Code 400", error);
            })

        } else {

            if (!nameValidation.test(name)) {
                this.setState({  
                    nameError: 'The name is incorrect' 
                });
            }
            if (!emailValidation.test(email)) {
                this.setState({
                    emailError: 'The email is invalid'
                });
            }
            if (message.length < 120) {
                this.setState({
                    messageError: 'The message must have at least 120 characters'
                });
            }
        }
    };

    render(){
        const {
            name,
            email,
            message,
            nameError,
            emailError,
            messageError,
            correctData
          } = this.state;

    return(
        <footer id = "contact" className = "footer-container">
            <div className = "footer-contact">
                <div className = "footer-text">
                    <p>Contact Us!</p>
                    <img className = "decoration" src = {Decoration} alt = "decoration"/> 
                </div>

                <form className = "footer-contact-form" onSubmit={this.handleSubmit}>
                    {correctData ? <span className = "footer-correct-data">The message was sent. We will contact you soon</span> : ''}
                    <div className = "footer-form-name-email">
                        <div className = "footer-form-name">
                            <label className = "footer-form-input-label">
                                Your name 
                                <input type="text" 
                                    placeholder = "name"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange} />
                                    {nameError ? <span className='footer-error'>{nameError}</span> : ''}
                            </label>
                        </div>

                        <div className = "footer-form-email">
                            <label className = "footer-form-input-label">
                                Your email 
                                <input type="email" 
                                    placeholder = "abc@xyz.pl"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange} />
                                    {emailError ? <span className='footer-error'>{emailError}</span> : ''}
                            </label>
                        </div>
                    </div>

                    <div className = "footer-form-message">
                        <label className = "footer-form-message-label">
                            Your message
                            <textarea 
                                rows = "5" 
                                cols = "50" 
                                type = "text" 
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                                placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                {messageError ? <span className='footer-error'>{messageError}</span> : ''}
                        </label>
                    </div>

                    <div className = "footer-form-btn">
                        <Link to = "/"><button type="submit" onClick={this.handleSubmit}>Send</button></Link> 
                    </div>
                </form>
            </div>

            <div className = "footer-bottom">
                <span>Copyright By Coders Lab | Roksana Sobczak</span>
                <div className = "footer-bottom-icons">
                    <img src = {Facebook} alt = "facebook"/>
                    <img src = {Instagram} alt = "instagram"/>
                </div>
            </div>
        </footer>
        
    )

    }
}

export default HomeFooter;