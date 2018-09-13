import React, { Component } from 'react';
import {Jumbotron, Button} from "react-bootstrap"
import "./home.css"
import MyNavBar from"./MyNavBar"
import MyJumboTron from "./MyJumbotron"

    


export default class MyJumbotron extends Component{



render (){
return(
  <div>
<Jumbotron className = "Jumbotron">
<center>
  <h1>Welcome to Arbitrage!</h1>
  <h4> The App that is designed to assist you seeing your assets value on different Exchanges
  </h4>
 
<Button bsStyle="primary">Log in/Register</Button>
<Button bsStyle="primary">Log Out</Button></center>
</Jumbotron>
  
</div>
)
    }}