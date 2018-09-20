import React, { Component } from 'react';
import CoinDb from "../../Modules/CoinDb"
import "../AllCoins/allcoins.css"
import AllCoinsDisplay from "../AllCoins/AllCoinsDisplay"
import { Route } from 'react-router-dom'

  

export default class AllCoinsContainer extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        AllCoins: []
    }
    componentDidMount() {
        const newState = {}
       CoinDb.getAllCoin()
            .then(AllCoins => newState.AllCoins = AllCoins)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
            
    }


 

    render() {

        return(
            <div className="trythat">
            {this.state.AllCoins.map(AllCoins => {
                 return < div key={AllCoins.id} className="flip-card">
                     <div className="flip-card">
                         <div className="flip-card-inner">
                             <div className="flip-card-front">
                                 <div className ="picCard" ><img src={AllCoins.img} ></img></div>
                                 <h3><div>{AllCoins.name}</div></h3>
                                 <h3> <div>Ticker Symbol: {AllCoins.symbol}</div></h3>
                                 <h3> <div>CoinMarketCap est USD price: ${AllCoins.quotes.USD.price}</div></h3>
                                
                             </div>
                             <div className="flip-card-back">
                             <h4>Total Marketcap Rank: {AllCoins.rank}</h4>
                                 <h4><div>Circulating Supply: {AllCoins.circulating_supply}</div>
                                     <div>Total Supply: {AllCoins.total_supply}</div></h4>
                                     <button className ="aDiv"id="tryThis"type="submit" className="button1">Save to Portfolio</button>
                     </div>
                             </div>
                         </ div>
                     </div>
          })}
     </div>
     
         )}
     
     
     
     }
     
              
