import React, { Component } from 'react';
import MyJumboTron from "./MyJumbotron"
import DataManager from "../Modules/DataManager"
import "./mycoins.css"

export default class MyCoins extends Component{


    state={
        AllCoins:[]
    }
componentDidMount(){
    const newState={}
    DataManager.getAllCoins()
    .then (AllCoins=>newState.AllCoins=AllCoins)
    .then(()=>this.setState(newState,()=>{console.log("this state after fetch",this.state)}))
;}




render(){

   return(
     this.state.AllCoins.map(AllCoins=>{
return< div key ={AllCoins.id} className="flip-card">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={AllCoins.img} ></img>
     <h3> <div>Ticker Symbol: {AllCoins.symbol}</div></h3>
    </div>
    <div class="flip-card-back">
    <h3><div>Asset Name:{AllCoins.name}</div></h3>
    <h4><div>Circulating Supply: {AllCoins.circulating_supply}</div>
     <div>Total Supply: {AllCoins.total_supply}</div></h4>
     </div>
     </div>
     </ div>
     </div>

      


       
       
      } )

    
   )}
    }
