import React, { Component } from 'react';
import MyJumboTron from "./MyJumbotron"
import DataManager from "../Modules/DataManager"





export default class MyCryptoContainer extends Component{
    constructor(props) {
        super(props)
   
    
    this.state = {
        activeUser: localStorage.getItem("user"),
        valueIntersection:[]
      }
    }

    componentDidMount() {
        const newState = {}
        DataManager.getValCoin()
            .then(valueIntersection => newState.valueIntersection = valueIntersection)
            .then(DataManager.getValUser())
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
            
  
    }
 render(){
     return(
                    <div>       


                            </div>
                
    

     )}
   
}
