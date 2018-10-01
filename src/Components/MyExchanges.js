import React, { Component } from 'react';
import ExchangeDb from "../Modules/ExchangeDb"
import "./AllCoins/allcoins.css"

export default class MyExchanges extends Component {

    state = {
        exchanges: []
    }





    componentDidMount() {
        const newState = {}
        ExchangeDb.getExchanges()
            .then(exchanges => newState.exchanges = exchanges)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
            ;
    }




    render() {


        return (
            this.state.exchanges.map(exchanges => {
                return < div key={exchanges.id} className="flip-card">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="picCard" ><img src={exchanges.logo}alt="" ></img></div>
                                <h3><div>{exchanges.name}</div></h3>
                                <h4> <div>Website: <a>{exchanges.website}</a></div></h4>


                            </div>
                            <div className="flip-card-back">
                                <h4><div>24 Hour Volume Average: {exchanges.volume24hr}</div>
                                <br></br>
                                    <div>Estimated Marketshare: {exchanges.marketshare}</div></h4>
                                    <br></br>
                                    <h4> <div>Website: <a>{exchanges.website}</a></div></h4>
                                   <br></br>
                               <button> <a href = {exchanges.website}>Website link</a></button>

                            </div>
                        </div>
                    </ div>

                </div>





            })


        )
    }
}