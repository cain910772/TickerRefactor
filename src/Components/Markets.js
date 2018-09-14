import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class Markets extends React.Component{

    state = {
        ExchangeData:[]
    }



componentDidMount(){
    const coinState={}

   return fetch("https://api.cryptonator.com/api/full/btc-usd")
    .then(e=>e.json())
     .then(()=>fetch("https://api.cryptonator.com/api/full/ltc-usd")
    .then(e=>e.json())
     .then(()=>fetch("https://api.cryptonator.com/api/full/xrp-usd")
    .then(e=>e.json())
    
  .then(()=>fetch("https://api.cryptonator.com/api/full/nxt-usd")
    .then(e=>e.json())
   
  .then(()=>fetch("https://api.cryptonator.com/api/full/Doge-usd")
    .then(e=>e.json())
 
//  .then(()=>fetch("https://api.cryptonator.com/api/full/dgb-usd")
//     .then(e=>e.json())
 
//  .then(()=>fetch("https://api.cryptonator.com/api/full/rdd-usd")
//     .then(e=>e.json())
  
//  .then(()=>fetch("https://api.cryptonator.com/api/full/dash-usd")
//   .then(e=>e.json())
  
//   .then(()=>fetch("https://api.cryptonator.com/api/full/mona-usd")
//     .then(e=>e.json())
   
//   .then(()=>fetch("https://api.cryptonator.com/api/full/maid-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/xmr-usd")
//     .then(e=>e.json())
  
//    .then(()=>fetch("https://api.cryptonator.com/api/full/bcn-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/bts-usd")
//     .then(e=>e.json())
 
//   .then(()=>fetch("https://api.cryptonator.com/api/full/btcd-usd")
//     .then(e=>e.json())

 
//    .then(()=>fetch("https://api.cryptonator.com/api/full/xlm-usd")
//     .then(e=>e.json())
   
//    .then(()=>fetch("https://api.cryptonator.com/api/full/emc-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/xvg-usd")
//     .then(e=>e.json())
   
// .then(()=>fetch("https://api.cryptonator.com/api/full/xem-usd")
//   .then(e=>e.json())
   
//   .then(()=>fetch("https://api.cryptonator.com/api/full/eth-usd")
//     .then(e=>e.json())
   
//     .then(()=>fetch("https://api.cryptonator.com/api/full/sc-usd")
//     .then(e=>e.json())
   
// .then(()=>fetch("https://api.cryptonator.com/api/full/rep-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/dcr-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/pivx-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/lsk-usd")
//     .then(e=>e.json())
  
//  .then(()=>fetch("https://api.cryptonator.com/api/full/dgd-usd")
//     .then(e=>e.json())
  
//    .then(()=>fetch("https://api.cryptonator.com/api/full/steem-usd")
//     .then(e=>e.json())
   
//   .then(()=>fetch("https://api.cryptonator.com/api/full/waves-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/ardr-usd")
//     .then(e=>e.json())
  
//     .then(()=>fetch("https://api.cryptonator.com/api/full/etc-usd")
//     .then(e=>e.json())
   
//   .then(()=>fetch("https://api.cryptonator.com/api/full/strat-usd")
//     .then(e=>e.json())
   
// .then(()=>fetch("https://api.cryptonator.com/api/full/neo-usd")
//     .then(e=>e.json())
  
//  .then(()=>fetch("https://api.cryptonator.com/api/full/xzc-usd")
//     .then(e=>e.json())
   
//   .then(()=>fetch("https://api.cryptonator.com/api/full/zec-usd")
//     .then(e=>e.json())
   
//     .then(()=>fetch("https://api.cryptonator.com/api/full/gnt-usd")
//     .then(e=>e.json())
  
//  .then(()=>fetch("https://api.cryptonator.com/api/full/mkr-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/kmd-usd")
//     .then(e=>e.json())
   
//  .then(()=>fetch("https://api.cryptonator.com/api/full/ark-usd")
//     .then(e=>e.json())
    
// .then(()=>fetch("https://api.cryptonator.com/api/full/qtum-usd")
//     .then(e=>e.json())
     
// .then(()=>fetch("https://api.cryptonator.com/api/full/bat-usd")
//     .then(e=>e.json())
    
//  .then(()=>fetch("https://api.cryptonator.com/api/full/zen-usd")
//     .then(e=>e.json())
  

.then(ExchangeData =>coinState.ExchangeData({
        ExchangeData:ExchangeData}))
        .then(() => this.setState(coinState, () => { console.log("this state after fetch", this.state) }))
        ))
         ))}



  

 

render(){
    return(
        this.state.ExchangeData.map(ExchangeData => {
            return < div key={ExchangeData.ticker.base} className="flip-card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {/* <img src={ExchangeData.img} ></img> */}
                            <h3><div>{ExchangeData.base}</div></h3>
                            <h3> <div>Ticker Symbol: {ExchangeData.price}</div></h3>
                        </div>
                        <div className="flip-card-back">

                            <h4><div>Circulating Supply: {ExchangeData.target}</div>
                                <div>Total Supply: {ExchangeData.price}</div></h4>
                                </div>
                        </div>
                    </ div>
                </div>

        })
    )}
    }