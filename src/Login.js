import React, { Component } from "react"
import "./Login.css"
import UserDb from "./Modules/UserDb"

export default class Login extends Component {

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
      e.preventDefault();
      UserDb.getAllUsers("users")
          .then(users => {
              let email = users.find(users => users.email === this.state.email);
              let password = users.find(users => users.password === this.state.password);
              if (email && password) {
                  localStorage.setItem("user", JSON.stringify(email, password))
                  sessionStorage.setItem("user", JSON.stringify(email, password))
                  this.props.history.push("/home")
              } else {
                  window.alert("You have entered an incorrect email or password!")
              }
          })
  }

  registerNewAccount = () => {
      this.props.history.push("/Register")
  }

  render() {
      return (
         <center><div className="login">
              <div className="formArea container d-flex flex-column">
                  <h1 className="gameTitle">Please Login Or Sign up!</h1>
                  <form className="loginForm d-flex flex-column justify-content-center" onSubmit={this.handleLogin}>
                      <input className="formField" onChange={this.handleFieldChange} type="email" id="email" placeholder="Email" />
                      <br></br>
                      <input className="formField" onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" />
                      <div className="loginBtn btnBackground">
                          <button className="mybtn" type="submit">Login</button>
                      </div>
                  </form>
                  <div className="registerBtn btnBackground">
                      <button className="regBtn" type="button" onClick={this.registerNewAccount}>Create Account</button>
                  </div>
              </div>
          </div>
          </center>
      )
  }
}