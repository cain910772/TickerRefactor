import React, { Component } from "react"
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, Form, Checkbox } from 'react-bootstrap';

class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:5002/users`)
            .then(r => r.json())
            .then(user => {
                // User exists. Set local storage, and show home view
                if (user.email) {
                    // this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                    // User doesn't exist
                } else {
                    // Create user in API
                    fetch("http://localhost:5002/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email: this.state.email, password: this.state.password })
                    })

                        // Set local storage with newly created user's id and show home view
                        .then(newUser => {
                            this.props.setActiveUser(newUser.id)
                            this.props.showView("home")
                        })
                }

            })
    }.bind(this)


    /*
        TODO:
            - Add first name field
            - Add last name field
            - Add password verification field
    */
    render() {
        return (
            <form className="form-signin" onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in or Register</h1>
                <label htmlFor="inputemail" className="sr-only">Email</label>
                <input onChange={this.handleFieldChange} type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="password" className="sr-only">Password</label>
                <input onChange={this.handleFieldChange} type="Password" id="Password" className="form-control" placeholder="Password" required="" />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in/Register</button>

            </form>
        )
    }
}
export default Login;