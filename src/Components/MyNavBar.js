import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem,Button} from "react-bootstrap"
import LogOut from"../LogOut"
import "./myNavBar.css"


class MyNavBar extends Component {
    render() {
       return (
     <center>
        <Navbar className ="mynavbar" >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Arbitrage</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="pills" activeKey={1} >
          <NavItem eventKey={1} href="/Login">
            Login
          </NavItem>
          <NavItem eventKey={2} href="/Home">
            Home
          </NavItem>
          <NavItem eventKey={3} href="AllCoins/AllCoinsDisplay">
            All Coins
          </NavItem>
          <NavItem eventKey={4} href="/MyCoinsDisplay">
            My Coins
          </NavItem>
          <NavItem eventKey={5} href="/MyExchanges">
            Exchanges
          </NavItem>
         <LogOut/>
        
            </Nav>
             </Navbar>
             </center>
         
       )
           
             
           

   
       
    }
 }
 
 export default MyNavBar
 
