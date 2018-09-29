import React, { Component } from 'react';
import "../Home/home.css"
import MySearch from "./Search"


export default class Home extends Component{
    constructor(props) {
        super(props);
          this.state ={ mydashboard:[] }
      

    // this.state = {
    //     Dashboard:[]


    }

    componentDidMount(){
        const newState={}
      return fetch("https://api.nomics.com/v1/dashboard?key=bda8c27c06ed079d1e7ebf5b1ebdfe82&currency=BTC")
            .then(e=>e.json())
            .then(mydashboard => newState.mydashboard = mydashboard)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
    }
    render() {
      
     return(
  
        this.state.mydashboard.map(mydashboard=>{
        return <div key ={mydashboard.currency}>
    
     <center><h3 className ="tick">Ticker Symbol: {mydashboard.currency}</h3></center> 
        <p className = "marquee"><span>

        Week open... {mydashboard.weekOpen}...Todays Open(If Available)... {mydashboard.dayOpen}...Highest Pair Currency...{mydashboard.highQuoteCurrency}... Best Trading Exchange...{mydashboard.highExchange}...    Weeks Volume(If Available)... {mydashboard.weekVolume} </span></p>
       
        
        
        
        

        </div>
     
        }))}}
    