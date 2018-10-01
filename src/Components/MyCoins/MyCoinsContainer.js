import React, { Component } from 'react';
import InterDb from "../../Modules/InterDb"
import "../AllCoins/allcoins.css"
import Buttons from '../MyCoins/Buttons.js';
import CoinDb from '../../Modules/CoinDb';
// import BigPull from"./BigPull"
import ApiDb from '../../Modules/ApiDb';

// import TickerPullContainer from "../TickerPullContainer"
export default class MyCoinsContainer extends Component {

    state = {
        AllVal: [],

        AllCoins: [],

        myDbPull: []
    }

    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    componentDidMount() {
        const newState = {}

        let ourId = JSON.parse(sessionStorage.getItem("user"))
        InterDb.getValUser(ourId.id)
            .then(AllVal => newState.AllVal = AllVal)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

        CoinDb.getAllCoin()
            .then(AllCoins => newState.AllCoins = AllCoins)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))


        ApiDb.myDbPull()
            .then(myDbPull => newState.myDbPull = myDbPull)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

    }




    render() {
        let val = []
        let coins = []
        this.state.AllCoins.forEach(coin => {
            this.state.AllVal.forEach(Val => {
                if (coin.id === Val.coinId) {
                    coins.push(coin)
                    val.push(Val.id)
                }
            })
        })
        let coinPull = []
        this.state.AllCoins.forEach(coin => {
            this.state.myDbPull.forEach(eachPull => {
                if (coin.symbol === eachPull.base) {
                    coinPull.push(eachPull)
                    console.log(coinPull)
                }
            })
        })
        let coins2 = []
        let metaCoin = []
        coins.forEach(coin => {
            coinPull.forEach(eachPull => {
                if (coin.symbol === eachPull.base) {
                    metaCoin.push(eachPull)
                    coins2.push(coin.id)
                    console.log(metaCoin)
                    console.log(coins2)
                }
            })
        })




        return (
            metaCoin.map(metaCoin => {
                return < div key={metaCoin.id} className="flip-card">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {/* <div><BigPull /></div> */}
                                <div className="picCard" ><img src={metaCoin.img}alt ="" ></img></div>
                                <h6> <div>Coin Name : {metaCoin.base}</div></h6>
                                <p>{metaCoin.market1}price:{metaCoin.price1} </p>
                                <p>{metaCoin.market2} price:{metaCoin.price2}</p>
                                <p>{metaCoin.market3} price:{metaCoin.price3} </p>
                                <p>{metaCoin.market4} price:{metaCoin.price4} </p>
                                <p>{metaCoin.market5} price:{metaCoin.price5} </p>
                                <p>{metaCoin.market6} price:{metaCoin.price6} </p>
                            </div>

                            <div className="flip-card-back">
                                <p>{metaCoin.market7} price:{metaCoin.price7} </p>
                                <p>{metaCoin.market8} price:{metaCoin.price8} </p>
                                <p>{metaCoin.market9} price:{metaCoin.price9} </p>
                                <p>{metaCoin.market10} price:{metaCoin.price10} </p>
                                <p>{metaCoin.market11} price:{metaCoin.price11} </p>
                                <p>{metaCoin.market12} price:{metaCoin.price12} </p>
                                <div><button className="buttons" onClick={() => Buttons.getAlert3(metaCoin.id)}>Remove</button ></div>

                            </div>
                            }
                            )}
                  </div>
                        })
                    }
                          </div>
                </div>





            })

        )
    }
}
