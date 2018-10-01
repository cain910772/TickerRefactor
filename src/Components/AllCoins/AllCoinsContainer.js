import React, { Component } from 'react';
import CoinDb from "../../Modules/CoinDb"
import "../AllCoins/allcoins.css"
import Buttons from '../MyCoins/Buttons.js';



export default class AllCoinsContainer extends Component {
 
    
    state = {
        AllCoins: [],
        User: []
    }
    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }



    componentDidMount() {
        const newState = {}
        // let ourId = JSON.parse(sessionStorage.getItem("user"))
        CoinDb.getAllCoin()
            .then(AllCoins => newState.AllCoins = AllCoins)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

    }




    render() {
        let ourId = JSON.parse(sessionStorage.getItem("user"))

        return (
            <div className="trythat">
                {this.state.AllCoins.map(AllCoins => {
                    return < div key={AllCoins.id} className="flip-card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="picCard" ><img src={AllCoins.img}alt="" ></img></div>
                                    <h3><div>{AllCoins.name}</div></h3>
                                    <br></br>
                                    <h4> <div>Ticker Symbol: {AllCoins.symbol}</div></h4>
                                    <br></br>
                                    <h4> <div>CoinMarketCap est USD price: ${AllCoins.quotes.USD.price}</div></h4>

                                </div>
                                <div className="flip-card-back">
                                    <h3><div>{AllCoins.name}</div></h3>
                                    <button className="aDiv" onClick={() => Buttons.getAlert2(AllCoins.id, ourId.id)}>Save to Portfolio</button>
                                    <h4>Total Marketcap Rank: {AllCoins.rank}</h4>

                                    <h4><div>Circulating Supply: {AllCoins.circulating_supply}</div>
                                        <br></br>
                                        <div>Total Supply: {AllCoins.total_supply}</div></h4>

                                    <h4> <div>CoinMarketCap est USD price: ${AllCoins.quotes.USD.price}</div></h4>

                                </div>
                            </div>
                        </ div>
                    </div>
                })}
            </div>

        )
    }



}


