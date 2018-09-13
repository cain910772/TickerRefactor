import React, { Component } from 'react';
import {Jumbotron, Button} from "react-bootstrap"
import "./home.css"
import MyNavBar from"./MyNavBar"
import MyJumboTron from "./MyJumbotron"
import Login from "../Login"

export default class Home extends Component{



  render(){
    return(
        <div>
        <div>
          <MyJumboTron />
        <Login />
        </div>
        Home</div>
    )}}

