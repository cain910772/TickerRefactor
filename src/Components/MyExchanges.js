import React, { Component } from 'react';
import MyJumboTron from "./MyJumbotron"
import DataManager from "../Modules/DataManager"
import Dumb from './Dumb';
import "./allcoins.css"

export default class MyExchanges extends Component{

state={
    exchanges:[]
}





componentDidMount() {
    const newState = {}
    DataManager.getExchanges()
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
                            <div className ="picCard" ><img src={exchanges.logo} ></img></div>
                            <h3><div>{exchanges.name}</div></h3>
                            <h4> <div>Website: <a>{exchanges.website}</a></div></h4>
                            
                           
                        </div>
                        <div className="flip-card-back">
                     <h4><div>24 Hour Volume Average: {exchanges.volume24hr}</div>
                                <div>Estiamted Marketshare: {exchanges.marketshare}</div></h4>
                                <button className ="aDiv"id="tryThis"type="submit"onClick={exchanges.website} className="button1">Go to Site</button>

                        </div>
                    </div>
                </ div>
            </div>





        })


    )
}
}