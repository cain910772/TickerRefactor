import React, { Component } from 'react';




export default class Logout extends Component {
   
   
   
    logout = ()=>
    {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    }
    render() {
        return(
            <div>
                <button className ="logoutBtn" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}