import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import DataManager from "./Modules/DataManager"
import Register from "./Register"

export default class Login extends Component {
    state = {
        email: "",
        password: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    login = () => {
        DataManager.getAllUsers()
            .then(result => {
                let users = result.find(result => {
                    //Checks to see if the info entered is in the database
                    return this.state.email === result.email && this.state.password === result.password
                })
                if (!users) {
                    alert("Email does not exist")
                } else {
                    return DataManager.getAllUser(this.state.email)
                        .then((result) => {
                            let stringifiedUserObject = JSON.stringify(result);
                            sessionStorage.setItem("userInfo", stringifiedUserObject)
                        })
                        .then(() => this.props.history.push("/MyCoins"))
                        .then(() => this.props.handleNavChange())
                }
            })
    }
 
        render() {
            return (
                <section className="hero login-form is-fullheight">
                    <div className="">
                        <div>
                        </div>
                        <div className="container has-text-centered">
                               
                                </div>
                            <div className="column is-4 is-offset-4 form">
                                <div className="">
                                        <div className="field">
                                            <div className="control">
                                                <label className="login-flag">Email</label>
                                                <input id="email" onChange={this.handleFieldChange} className="input is-large" type="text" placeholder="Email" />
                                            </div>
                                        </div>
    
                                        <div className="field">
                                            <div className="control">
                                                <label className="login-flag">Password</label>
                                                <input id="password1" onChange={this.handleFieldChange} className="input is-large" type="password" placeholder="Password" />
                                            </div>
                                        </div>
                                        <Button className="button is-block is-warning is-large is-fullwidth"onClick={this.login}>Submit</Button>
                                        </div>
<div> <Register /></div>
                                 
                                        </div>
                                    </div>
                         
                            </section>)}}
                           