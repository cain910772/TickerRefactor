import React, { Component } from "react"
import UserDb from "./Modules/UserDb"




export default class Register extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    constructNewUser = evt => {
        evt.preventDefault()

        if (this.state.email === "" || this.state.password === "") {
            window.alert("Enter all fields")

        }
        else if (UserDb.getAllUsers("users")
            .then(users => {
                let email = users.find(users => users.email === this.state.email);
                let password = users.find(users => users.password === this.state.password)
                alert("The email or password you have entered is already in use!")
            }));



        else {
            const user = {
                email: this.state.email,
                password: this.state.password
            }

            alert("Sucess, please log in")
            UserDb.postUser("users", user).then(() => this.props.history.push("/login"))
        }
    }



    render() {
        return (
            <div className="registration">
                <form className="registerForm" onSubmit={this.handleLogin}>
                    <h1 className="">Register for a new account!</h1>
                    <input className="" onChange={this.handleFieldChange} type="email" id="email" placeholder="Email" />
                    <input className="" onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" />
                    <button className="newAccount" type="submit" onClick={this.constructNewUser}>Register</button>
                    <button className="cancelBtn" type="button" onClick={this.cancelNewUser}>Cancel</button>
                </form>
            </div>
        )
    }
}