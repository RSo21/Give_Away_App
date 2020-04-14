import React, { Component } from 'react';
import {Link} from "react-router-dom";
import LogElements from '../components/LogElements';
import Decoration from "../assets/Decoration.svg"
import NavigationLoginAndRegister from '../components/NavigationLoginAndRegister';
import {withFirebase} from '../components/firebase/context';
import {withRouter} from "react-router-dom"

class LoginForm extends Component{
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        error: "",
        loginSuccess: "",
        loginError: "",
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        
        const {
          email,
          password
        } = this.state;

        if(emailValidation.test(email) && password.length >= 6){
          this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
              console.log(authUser, this.props.firebase.auth.currentUser)
            this.setState({ 
              email: "",
              password: "",
              loginSuccess: "Logged in successfully",
              user: authUser.user
             });

              sessionStorage.setItem("email", `${authUser.user.email}`);
              sessionStorage.setItem("uid", `${authUser.user.uid}`);

            })
            .catch(error => {
              if(error.code === 'auth/user-not-found'){
                this.setState({ 
                  loginError: "User not found",
                  error: true,
                  });
                }
            });
          
          }else {

        }

      if (!emailValidation.test(email)) {
        this.setState({  
          emailError: 'The email is invalid' 
        });
      }

      if (password.length < 6) {
        this.setState({
          passwordError: 'The password is too short'
        });
      }
    };

    render(){
        const {
            email,
            password,
            emailError,
            passwordError,
            loginSuccess,
            loginError
          } = this.state;

        return(
            <>
                <LogElements/>
                <NavigationLoginAndRegister />
                <div className = "login">
                    <div className = "login-text">
                        <p>Sign In</p>
                        <img className = "decoration" src = {Decoration} alt = "decoration"/>
                        {loginSuccess ? <p className='login-success-user'>{loginSuccess}</p> : ""}
                        {loginError ? <p className='login-error-user'>{loginError}</p> : ""}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className = "login-form-input">
                            <label className = "login-form-input-label">
                                Email 
                                <input type="email" 
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange} />
                                    {emailError ? <span className='login-error'>{emailError}</span> : ''}
                            </label>

                            <label className = "login-form-input-label">
                                Password 
                                <input type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}/>
                                    {passwordError ? <span className='login-error'>{passwordError}</span> : ''}
                            </label>
                        </div>
                        <div className = "login-form-btn">
                            <Link to="/register"><button>Register</button> </Link>
                            <button  type="submit" onClick={this.handleSubmit}>Sign In</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
const Login =withRouter(withFirebase(LoginForm));

export default withFirebase(Login);