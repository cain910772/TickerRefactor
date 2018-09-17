import React, { Component } from 'react';
import {Jumbotron, Button} from "react-bootstrap"
import "./home.css"


    


export default class MyJumbotron extends Component{



render (){
return(
  <div>
<Jumbotron className = "Jumbotron">
<center>
  <h1>Welcome to Arbitrage!</h1>
  <h4> The App that is designed to assist you seeing your assets value on different Exchanges
  </h4>
  </center>
</Jumbotron>
  
</div>
)
    }}