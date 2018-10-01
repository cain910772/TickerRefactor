import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap"
import "./Home/home.css"
import MyNavBar from "./MyNavBar"
import LogOut from "../LogOut"




export default class MyJumbotron extends Component {



  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron">
          <center>
            {/* <h1>Welcome to Arbitrage!</h1>
            <h2> The App that is designed to assist seeing your assets value on different Exchanges</h2> */}
            <MyNavBar /><LogOut />
          </center></Jumbotron>

      </div>
    )
  }
}