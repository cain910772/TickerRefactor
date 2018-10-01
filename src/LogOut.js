import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from "react-bootstrap"



export default class Logout extends Component {



    logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    }
    render() {
        return (

            <NavItem onClick={this.logout}>Logout</NavItem>

        )
    }
}