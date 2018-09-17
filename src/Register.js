import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataManager from "./Modules/DataManager"
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class Register extends Component {
    state = {
        email: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    registerNewUser = () => {
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }

        DataManager.postUser(newUser)
            .then(() => alert("You've successfully registered, please login"))
            // .then(() => this.props.history.push("/home"))
    }

    render() {
        return (
            <section className="hero login-form is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Register</h3>
                            <p className="subtitle has-text-grey">Please make an account.</p>
                            <div className="box">
                                <div>
                                    <div className="field">
                                        <div className="control">
                                            <label className="login-flag">Email</label>
                                            <input id="email" className="input is-large" type="text" placeholder="Email"  onChange={this.handleFieldChange}/>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <label className="login-flag">Password</label>
                                            <input id="password" className="input is-large" type="password" placeholder="Password" onChange={this.handleFieldChange}/>
                                        </div>
                                    </div>

                                  <Button bsStyle="danger"className="button is-block is-warning is-large is-fullwidth" onClick={this.registerNewUser}>Signup</Button>
                                </div>
                            </div>
                            <p className="has-text-grey">
                                <Link to="/Login">Cancel</Link> &nbsp;·&nbsp;
                                     </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}