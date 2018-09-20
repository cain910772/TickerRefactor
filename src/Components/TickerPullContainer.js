import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
export default class TickerPullContainer extends React.Component{

    state = {
        ExchangeData:[]


    }
     
    componentDidMount(){
        const newState={}
            return fetch("https://api.nomics.com/v1/exchange-markets/prices?key=bda8c27c06ed079d1e7ebf5b1ebdfe82&currency=BTC")
            .then(e=>e.json())
            .then(ExchangeData => newState.ExchangeData = ExchangeData)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

             }
     render(){
 
     
       

         return(
            
             this.state.ExchangeData.map(ExchangeData=>{
              return< div key ={ExchangeData.id} className="flip-card">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      {/* <img src={ExchangeData.img} ></img> */}                       
                      <h3><div>Exchange Name: {ExchangeData.exchange}</div></h3>
                      <h3><div>Coin Name : {ExchangeData.base}</div></h3>
                     <h3> <div>Quote in: {ExchangeData.quote}</div></h3>
                   </div><h4 className="flip-card-back">
                   
                    <div>Price quote: {ExchangeData.price_quote}</div></h4>
                      {/* <div>Total Supply: {ExchangeData.total_supply}</div></h4> */}
              
                     </div>
                </div>
                     </div>
                
}))}}