import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "react-bootstrap"



class MyNavBar extends Component {
    render() {
       return (
          <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
             <ul className="nav nav-pills">
                <li className="nav-item">
                   <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/Markets">Markets</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/MyCoins">Coins</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/MyExchanges">Exchanges</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/MyCrypto">Crypto Info</Link>
                </li>
             </ul>
          </nav>
       )
    }
 }
 
 export default MyNavBar
 
