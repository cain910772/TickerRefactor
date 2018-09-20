import React, { Component } from 'react';
import "../Home/home.css"
import {Carousel} from "react-bootstrap"

export default class Home extends Component{
    constructor(props) {
        super(props);
          let mydashboard=[]
           for (let i = 0; i < 10; i++) {
            mydashboard.push(<mydashboard />);
        }

    this.state = {
        Dashboard:[]


    }
}
    componentDidMount(){
        const newState={}
      return fetch("https://api.nomics.com/v1/dashboard?key=bda8c27c06ed079d1e7ebf5b1ebdfe82&currency=BTC")
            .then(e=>e.json())
            .then(Dashboard => newState.Dashboard = Dashboard)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
    }
    render() {
       
     return(
  
        this.state.Dashboard.map(mydashboard=>{
        return <Carousel key ={mydashboard.weekVolume}>
         <Carousel.Item>
             <ul>
        <li><p>Ticker Symbol: 
{mydashboard.currency},
        Week open: {mydashboard.weekOpen},Todays Open(If Available): {mydashboard.dayOpen},Highest Pair Currency:{mydashboard.highQuoteCurrency}, Best Trading Exchange:{mydashboard.highExchange},    Weeks Volume(If Available): {mydashboard.weekVolume} ,</p>
        </li> </ul>
        
        
        
        
        </Carousel.Item>
        </Carousel>
     
        }))}}
    