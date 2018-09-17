import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem,Pills,ButtonGroup} from "react-bootstrap"



class MyNavBar extends Component {
    render() {
       return (
          <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
             <div className="nav nav-pills">
             <ButtonGroup>
                <div className="nav-item">
                   <Link className="nav-pill" to="/Login">Login</Link>
                </div>
                <div  className="nav-item">
                   <Link className="nav-link" to="/Home">Home</Link>
                </div >
                <div  className="nav-item">
                   <Link className="nav-link" to="/MyCoins">Top Coins</Link>
                </div >
                <div  className="nav-item">
                   <Link className="nav-link" to="/MyExchanges">Exchanges</Link>
                </div >
                <div  className="nav-item">
                   <Link className="nav-link" to="/MyCrypto">My Portfolio Info</Link>
                </div >
                </ButtonGroup>
             </div>
          </nav>
       )
    }
 }
 
 export default MyNavBar
 
