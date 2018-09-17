import React, { Component } from 'react';
import DataManager from "../Modules/DataManager"
import "./mycoins.css"


export default class MyCoins extends Component {


    state = {
        AllCoins: []
    }
    componentDidMount() {
        const newState = {}
        DataManager.getAllCoins()
            .then(AllCoins => newState.AllCoins = AllCoins)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
            ;
    }




    render() {

        return (
            this.state.AllCoins.map(AllCoins => {
                return < div key={AllCoins.id} className="flip-card">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={AllCoins.img} ></img>
                                <h3><div>{AllCoins.name}</div></h3>
                                <h3> <div>Ticker Symbol: {AllCoins.symbol}</div></h3>
                            </div>
                            <div className="flip-card-back">

                                <h4><div>Circulating Supply: {AllCoins.circulating_supply}</div>
                                    <div>Total Supply: {AllCoins.total_supply}</div></h4>
                                    <button className="button1">Save to Portfolio</button>
                            </div>
                        </div>
                    </ div>
                </div>





            })


        )
    }
}
