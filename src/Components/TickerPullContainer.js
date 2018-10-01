// import React from "react"
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import CoinDb from '../Modules/CoinDb';

// export default class TickerPullContainer extends React.Component{

//     state = {
//         ExchangeData:[],
//         AllCoins:[]

//     }
     
//     componentDidMount(){
//         const newState={}
//         let ourId = JSON.parse(sessionStorage.getItem("user")) 
//             return fetch("https://api.nomics.com/v1/exchange-markets/prices?key=bda8c27c06ed079d1e7ebf5b1ebdfe82&currency=USD")
//             .then(e=>e.json())
//             .then(ExchangeData => newState.ExchangeData = ExchangeData)
//             .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) })),

//             CoinDb.getAllCoin()
//             .then(AllCoins => newState.AllCoins = AllCoins)
//             .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

            
//     }
//      render(){
//         let exchange=[]
//         let val=[]
//      this.state.ExchangeData.forEach(ExchangeData =>{
//         this.state.AllCoins.forEach(AllCoins =>{
//          if(ExchangeData.base === AllCoins.symbol)
//          exchange.push(ExchangeData.base)
//          val.push(AllCoins.symbol)
//      })
//     })

//          return(
            
//              this.state.ExchangeData.map(ExchangeData=>{
//               return< div key ={ExchangeData.id} className="flip-card">
//               <div className="flip-card">
//                   <div className="flip-card-inner">
//                     <div className="flip-card-front">
//                       {/* <img src={ExchangeData.img} ></img> */}                       
                     
//                    </div><h4 className="flip-card-back">
//                    <h3><div>Exchange Name: {ExchangeData.exchange}</div></h3>
//                       <h3><div>Coin Name : {ExchangeData.base}</div></h3>
//                      <h3> <div>Quote in: {ExchangeData.quote}</div></h3>
//                     <div>Price quote: {ExchangeData.price_quote}</div></h4>
//                       {/* <div>Total Supply: {ExchangeData.total_supply}</div></h4> */}
              
//                      </div>
//                 </div>
//                      </div>
                
// }))}}