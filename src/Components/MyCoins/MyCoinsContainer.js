 import React, { Component } from 'react';
import InterDb from "../../Modules/InterDb"
import "../AllCoins/allcoins.css"
import myButton from "../MyCoins/Buttons.js"
import Buttons from '../MyCoins/Buttons.js';
import CoinDb from '../../Modules/CoinDb';
  

export default class MyCoinsContainer extends Component{
   
    state = {
     AllVal:[],
    
     AllCoins:[]
    }

    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }

    
    componentDidMount() {
        const newState = {}

       let ourId = JSON.parse(sessionStorage.getItem("user")) 
        InterDb.getValUser(ourId.id)
            .then(AllVal => newState.AllVal = AllVal)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

            CoinDb.getAllCoin()
            .then(AllCoins => newState.AllCoins = AllCoins)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

            
    }

    
 

    render() {
        let val=[]
        let coins = []
        this.state.AllCoins.forEach(coin => {
            this.state.AllVal.forEach(Val =>{
             if(coin.id === Val.coinId){
                 coins.push(coin)
                 val.push(Val.id)
             }
         }
            )
            
        });
  
        return (
          coins.map(coins => {
                return < div key={coins.id} className="flip-card">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <div className ="picCard" ><img src={coins.img} ></img></div>
                             
                                <h3> <div>Coin Name : {coins.name}</div></h3> 
                            

                            </div>
                            <div className="flip-card-back">
                            <div><button className="buttons" onClick ={()=>Buttons.getAlert3(coins.id)}>Remove</button ></div>

                            </div>
                                
                  
                  </div>
                  </div>
                  </div>
                        




            })


        )
    }
}
