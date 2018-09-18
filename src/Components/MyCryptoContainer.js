import React, { Component } from 'react';
import MyJumboTron from "./MyJumbotron"
import DataManager from "../Modules/DataManager"





export default class MyCryptoContainer extends Component{

    isAuthenticated = () =>
    localStorage.getItem("userInfo") !== null ||
    sessionStorage.getItem("userInfo") !== null

    
    state = {
        activeUser: localStorage.getItem("usersId"),
       valueInt:[]
      }


      handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    componentDidMount() {
        const newState = {}
        DataManager.postValUser()
            .then(userId => newState.userId = userId )
                .then( coinId => newState.coinId = coinId)
            
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
            
    }


    

render(){
 
return(
<div>

<div> <button onClick={this.handlePortfolio} className="button1">Save to Portfolio</button></div>

<div>kcfnsvn</div>

</div>
)}
}