import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem,Pills,Button} from "react-bootstrap"
import LogOut from"../LogOut"



class MyNavBar extends Component {
    render() {
       return (
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Arbitrage</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/Login">
            Login
          </NavItem>
          <NavItem eventKey={2} href="/Home">
            Home
          </NavItem>
          <NavItem eventKey={3} href="/MyCoins">
            All Coins
          </NavItem>
          <NavItem eventKey={4} href="/MyCrypto">
            My Coins
          </NavItem>
          <NavItem eventKey={5} href="/MyExchanges">
            Exchanges
          </NavItem>
          </Nav>
          
             <LogOut />
             </Navbar>
       )
           
             
           

   
       
    }
 }
 
 export default MyNavBar
 
