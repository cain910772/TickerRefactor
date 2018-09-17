// import React from "react"
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// export default class TickerPullContainer extends React.Component{

//     state = {
//         ExchangeData:[]
//     }

//     componentDidMount(){
//         const newState={}
//             return fetch(" https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=id ")
//              .then(e=>e.json())
//              .then(ExchangeData =>newState.ExchangeData({
//                 ExchangeData:ExchangeData}))
//                 .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
//              }
//      render(){


//          return(
//              this.state.ExchangeData.map(ExchangeData=>{
//               return< div key ={ExchangeData.base} className="flip-card">
//               <div className="flip-card">
//                   <div className="flip-card-inner">
//                     <div className="flip-card-front">
//                       {/* <img src={ExchangeData.img} ></img> */}                       
//                       <h3><div>{ExchangeData.markets.price}</div></h3>
//                      <h3> <div>Ticker Symbol: {ExchangeData.symbol}</div></h3>
//                    </div><h4 className="flip-card-back">
                   
//                     <h4><div>Circulating Supply: {ExchangeData.volume}</div></h4></h4>
//                       {/* <div>Total Supply: {ExchangeData.total_supply}</div></h4> */}
              
//                      </div>
                
//                      </div>
//                      </ div>
//              }))}}