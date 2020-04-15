import React, { Component } from "react";
import Decoration from "./../../assets/Decoration.svg"

import IconOne from "./../../assets/Icon-1.svg";
import IconThree from "./../../assets/Icon-3.svg";

class GiveAwayForm  extends Component{
    state = {
        counter: 1,
        step1Value: "",
        step1Error: false,
        step2Option: "1",
        step2Error: false,
        step3City: "Poznan",
        step3Checkbox: [],
        step3Error: false,
        step4Street: "",
        step4City: "",
        step4PostCode: "",
        step4Phone: "",
        step4Date: "",
        step4Time: "",
        step4StreetError: "",
        step4CityError: "",
        step4PostCodeError: "",
        step4PhoneError: "",
        step4DateError: "",
        step4TimeError: "",
        notes: ""
    }

    handleNext = () => {

        const {counter, step1Value, step2Option, step3City, step3Checkbox} = this.state;

        if (counter === 1) {
            if (step1Value !== "") {
                this.setState({
                    counter: counter + 1,
                });
            } else {
                if (step1Value === "") {
                    this.setState({
                        step1Error: "At least one value must be selected",
                    });
                }
            }
        } else if (counter === 2) {
            if (step2Option !== "") {
                this.setState({
                    counter: counter + 1,
                });
            } else {
                if (step2Option === "") {
                    this.setState({
                        step2Error: "At least one value must be selected",
                    });
                }
            }
        } else if (counter === 3) {
            if (step3Checkbox.length !== 0 && step3City !== "") {
                this.setState({
                    counter: counter + 1,
                });
            } else {
                if (step3Checkbox.length === 0 || step3City === "") {
                    this.setState({
                        step3Error: "At least one value must be selected",
                    });
                }
            }
        }else if(counter === 4){
            const {step4Street, step4City, step4PostCode, step4Phone, step4Date, step4Time} = this.state;

            const postcodeValidation = /[0-9]{2}-[0-9]{3}/;
            const phoneValidation = /^([0-9]{9})$/;

            
        if(step4Street.length >= 2 && step4City.length >= 2 && (postcodeValidation.test(step4PostCode)) 
        && (phoneValidation.test(step4Phone)) && step4Phone.length === 9 && step4Date.length > 0 && step4Time.length > 0){   
            this.setState({
                counter: this.state.counter + 1
            });

        }else {
            if (step4Street.length === 0) {
                this.setState({
                    step4StreetError: "The street must have at least 2 characters",
                })
            }
            if (step4City.length === 0) {
                this.setState({
                    step4CityError: "The City must have at least 2 characters",
                })
            }
            if (!postcodeValidation.test(step4PostCode)) {
                this.setState({
                    step4PostCodeError: "Post Code must be 5 characters",
                })
            }
            if (!phoneValidation.test(step4Phone)) {
                this.setState({
                    step4PhoneError: "The phone number must have 9 numbers",
                })
            }
            if (step4Date.length < 6) {
                this.setState({
                    step4DateError: "The date must have 6 characters",
                })
            }
            if (step4Time.length < 3) {
                this.setState({
                    step4TimeError: "The time must have 3 characters",
                })
            }
        }
    }else if(counter === 5){
        this.setState({
            counter: this.state.counter + 1,
        })
    }
};

    handleBack = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };


    handleStep1 = (e) => {
        this.setState({
            step1Value: e.target.value,
        });
        console.log(this.state.step1Value)

    };

    handleStep2 = (e) => {
        this.setState({
            step2Option: e.target.value,
        });
    };

    
    handleStep3City = (e) => {
        this.setState({
            step3City: e.target.value,
        });  
    };

    handleStep3Checkbox = (e) => {
        this.setState({
            step3Checkbox: e.target.value,
        });

    };

    handleStep4 = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleConfirm = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const {counter, step1Error, step1Value, step2Option, step2Error, step3City, step3Checkbox, step3Error, step4Street, step4City, step4PostCode, 
            step4Phone, step4Date, step4Time, step4StreetError, step4CityError, step4PostCodeError, step4PhoneError, step4DateError,
            step4TimeError, notes} = this.state

        if(counter === 1){
            return(
                <>
                    <div className = "give-away-form-container">
                        <p className = "step-counter">Step {counter}/4</p>
                        <div className = "step"> 
                            {step1Error ? <p className = "step-error">{step1Error}</p> : ""}
                            <form className = "step1" onSubmit={this.handleSubmit}>
                                <p className = "step1-select">Select what you want to add: </p>    
                                <label className = "step1-label">
                                    <input type="radio" name="step1Value" value="clothes that can be used again" onChange={this.handleStep1}/>
                                clothes that can be used again
                                </label>
                                <label className = "step1-label">
                                    <input type="radio" name="step1Value" value="clothes to throw away" onChange={this.handleStep1}/>
                                clothes to throw away
                                </label>
                                <label className = "step1-label">
                                    <input type="radio" name="step1Value" value="toys" onChange={this.handleStep1}/>
                                toys
                                </label>
                                <label className = "step1-label">
                                    <input type="radio" name="step1Value" value="books" onChange={this.handleStep1}/>
                                books
                                </label>
                                <label className = "step1-label">
                                    <input type="radio" name="step1Value" value="other" onChange={this.handleStep1}/>
                                other
                                </label> 
                            </form>
                            <button className = "step1-btn" onClick = {this.handleNext}>NEXT</button>
                        </div>           
                    </div>
                </>
            )
        } if(counter === 2){
            return(
                <>
                    <div className = "give-away-form-container">
                        <p className = "step-counter">Step {counter}/4</p>
                        <div className = "step">
                            {step2Error ? <p className = "step-error">{step2Error}</p> : ""}
                            <div className = "step2"> 
                                <form className = "step2-form" onSubmit={this.handleSubmit} >
                                <p className = "step2-select">Select the number of bags you have packed your items into:</p>
                                    <label>Number of 60l bags: &nbsp;
                                        <select name="bags" value = {step2Option} onChange={this.handleStep2}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </label>
                                </form>
                                <div className = "steps-buttons">
                                    <button onClick = {this.handleBack}>BACK</button>
                                    <button onClick = {this.handleNext}>NEXT</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </>
            )
        } if(counter === 3){
            return(
                <>
                    <div className = "give-away-form-container">
                        <p className = "step-counter">Step {counter}/4</p>
                        <div className = "step">
                            {step3Error ? <p className = "step-error">{step3Error} </p> : ""}
                            <div className = "step3">   
                                <form className = "step3-form" onSubmit={this.handleSubmit} >
                                    <label>Lokalization: &nbsp;
                                        <select name="localization" value = {step3City} onChange={this.handleStep3City}>
                                            <option value="poznan">Poznan</option>
                                            <option value="szczecin">Szczecin</option>
                                            <option value="krakow">Krakow</option>
                                            <option value="wroclaw">Wroclaw</option>
                                            <option value="gdansk">Gdansk</option>
                                        </select>
                                    </label>

                                    <p className = "step3-whom-we-help">Whom you want to help:</p>
                                    <label className = "step3-label">
                                        <input type="checkbox" name="step3Checkbox" value="kids" onChange={this.handleStep3Checkbox}/>
                                    Kids
                                    </label>
                                    <label className = "step3-label">
                                     <input type="checkbox" name="step3Checkbox" value="single mothers" onChange={this.handleStep3Checkbox}/>
                                    Single mothers
                                    </label>
                                    <label className = "step3-label">
                                        <input type="checkbox" name="step3Checkbox" value="homeless" onChange={this.handleStep3Checkbox}/>
                                    Homeless
                                    </label>
                                    <label className = "step3-label">
                                        <input type="checkbox" name="step3Checkbox" value="disabled" onChange={this.handleStep3Checkbox}/>
                                    Disabled
                                    </label>
                                    <label className = "step3-label">
                                        <input type="checkbox" name="step3Checkbox" value="elder people" onChange={this.handleStep3Checkbox}/>
                                    Elder people
                                    </label>

                                </form>
                                <div className = "steps-buttons">
                                    <button onClick = {this.handleBack}>BACK</button>
                                    <button onClick = {this.handleNext}>NEXT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) 
        }

        if(counter === 4){
            return(
                <>
                    <div className = "give-away-form-container">
                    <p className = "step-counter">Step {counter}/4</p>
                    <div className = "step">
                        <div className = "step4">   
                            <p className = "step4-text">Provide the address and deadline for pickup by deliverymen:</p>
                            <form className = "step4-form" onSubmit={this.handleSubmit} >
                                <div className = "adress">
                                    <p>Pickup Address:</p>
                                    <label className = "step4-label">
                                    Street: &nbsp;
                                    {step4StreetError ? <span className = "step-error">{step4StreetError} </span> : ""}
                                        <input type="text" value = {step4Street} name = "step4Street"
                                        onChange={this.handleStep4} />
                                    </label>
                                    <label className = "step1-label">
                                    City: &nbsp;
                                    {step4CityError ? <span className = "step-error">{step4CityError} </span> : ""}
                                        <input type="text" value = {step4City} name = "step4City"
                                        onChange={this.handleStep4}/>
                                    </label>
                                    <label className = "step1-label">
                                    Post Code: &nbsp;
                                    {step4PostCodeError ? <span className = "step-error">{step4PostCodeError} </span> : ""}
                                        <input type="text" value = {step4PostCode} name = "step4PostCode"
                                        onChange={this.handleStep4}/>
                                    </label>
                                    <label className = "step1-label">
                                    Phone number: &nbsp;
                                    {step4PhoneError ? <span className = "step-error">{step4PhoneError} </span> : ""}
                                        <input type="number" value = {step4Phone} name = "step4Phone"
                                        onChange={this.handleStep4}/>
                                    </label>
                                </div>
                                <div className = "date">
                                    <p>Date of receipt:</p>
                                    <label className = "step1-label">
                                    Date: &nbsp;
                                    {step4DateError ? <span className = "step-error">{step4DateError} </span> : ""}
                                        <input type="text" value = {step4Date} name = "step4Date"
                                        onChange={this.handleStep4}/>
                                    </label>
                                    <label className = "step1-label">
                                    Time: &nbsp;
                                    {step4TimeError ? <span className = "step-error">{step4TimeError} </span> : ""}
                                        <input type="text" value = {step4Time} name = "step4Time"
                                        onChange={this.handleStep4}/>
                                    </label>
                                    <label className = "step1-label">
                                    Notes for deliverymen: &nbsp;
                                        <textarea value = {notes} name = "notes" onChange={this.handleStep4}/>
                                    </label>
                                </div>
                            </form>
                                <div className = "steps-buttons">
                                    <button onClick = {this.handleBack}>BACK</button>
                                    <button onClick = {this.handleNext}>NEXT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>    
            )
        }

        if(counter === 5){
            return(
                <>
                    <div className = "give-away-form-container">
                        <div className = "step">
                            <div className = "step5">
                                <p className = "step5-text">Summary of your donation:</p>
                                <div className = "step5-donate">
                                    <p>You donate: </p>
                                    <div className = "step5-donate-row">
                                        <img src = {IconOne} alt = "icon1" /> <span>{step2Option} bags, {step1Value}, {step3Checkbox}</span> 
                                    </div>
                                    <div className = "step5-donate-row">
                                        <img src = {IconThree} alt = "icon1" /> <span>Location: {step3City}</span> 
                                    </div>
                                </div>
                                <div className = "step5-data">
                                    <div className = "step5-adress">
                                        <p>Pickup Address: </p>
                                        <p>Street: {step4Street}</p>
                                        <p>City: {step4City}</p>
                                        <p>Post Code: {step4PostCode}</p>
                                        <p>Phone: {step4Phone}</p>
                                    </div>
                                    <div className = "step5-term">
                                        <p>Date of receipt: </p>
                                        <p>Date: {step4Date}</p>
                                        <p>Time: {step4Time}</p>
                                        <p>Notes for deliverymen: {notes}</p>
                                    </div>
                                </div>
                                <div className = "steps-buttons">
                                    <button onClick = {this.handleBack}>BACK</button>
                                    <button onClick = {this.handleConfirm}>CONFIRM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        if(counter === 6){
            return(
                <>
                    <div className = "give-away-form-container">
                        <div className = "step">
                            <div className = "step6">
                                <p>Thank you for submitting the form.</p> 
                                <p>We will send any pickup information by email.</p>
                                <img className = "decoration" src = {Decoration} alt = "decoration"/>
                            </div>
                        </div>
                    </div>
                </>

            )
        }
    } 
}

export default GiveAwayForm;