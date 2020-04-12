import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LogElements from '../components/LogElements';
import Decoration from "../assets/Decoration.svg"
import NavigationLoginAndRegister from '../components/NavigationLoginAndRegister';
import {withFirebase} from '../components/firebase/context';
import {withRouter} from "react-router-dom"

class RegisterForm extends Component{
    state = {
        email: "",
        password: "",
        password2: "",
        emailError: "",
        passwordError: "",
        passwordError2: "",
        error: false,
        register: ""
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        const {
          email,
          password,
          password2
        } = this.state;

      if (emailValidation.test(email) && password.length > 6 && password2.length > 6 && password2 === password ) {
            this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
              console.log(authUser, this.props.firebase.auth.currentUser)
            this.setState({ 
              email: "",
              password: "",
              password2: "",
              register: "Registered successfully"
             });

             sessionStorage.setItem("email", `${authUser.user.email}`);
             sessionStorage.setItem("uid", `${authUser.user.uid}`);

            })
            .catch(error => {
            this.setState({ 
              error: true,
              });

            });
          
          }else {

            if(!emailValidation.test(email)){
              this.setState({  
                emailError: 'The email is invalid' 
              })
            }
      
            if (password.length < 6) {
              this.setState({
                passwordError: 'The password is too short'
              });
            }

            if (password2.length < 6 || password2 !== password) {
              this.setState({
                passwordError2: 'The password must match'
              });
            }
          }
      };

    render(){
        const {
            email,
            password,
            password2,
            emailError,
            passwordError,
            passwordError2,
            register,
          } = this.state;

        return(
            <>
                <LogElements/>
                <NavigationLoginAndRegister />
                <div className = "register">
                    <div className = "register-text">
                        <p>Register</p>
                        <img className = "decoration" src = {Decoration} alt = "decoration"/>
                        {register ? <p className = "register-success">{register}</p> : " "}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className = "register-form-input">
                            <label className = "register-form-input-label">
                                Email 
                                <input type="mail"
                                name="email"
                                value={email}
                                onChange={this.handleChange} />
                                {emailError ? <span className='register-error'>{emailError}</span> : ''}
                            </label>

                            <label className = "register-form-input-label">
                                Password
                                <input type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}/>
                                {passwordError ? <span className='register-error'>{passwordError}</span> : ''}
                            </label>

                            <label className = "register-form-input-label-2">
                                Repeat Password 
                                <input type="password"
                                name="password2"
                                value={password2}
                                onChange={this.handleChange}/>
                                {passwordError2 ? <span className='register-error'>{passwordError2}</span> : ''}
                            </label>
                        </div>

                        <div className = "register-form-btn">
                            <Link to="/login"><button>Login</button></Link>
                            <button type="submit" onClick={this.handleSubmit}>Register</button> 
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

const Register =withRouter(withFirebase(RegisterForm));

export default withFirebase(Register);