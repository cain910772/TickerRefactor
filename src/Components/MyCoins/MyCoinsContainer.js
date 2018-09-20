 import React, { Component } from 'react';
import InterDb from "../../Modules/InterDb"
import "../AllCoins/allcoins.css"

  

export default class MyCoinsContainer extends Component{
   
    state = {
     AllVal:[]
    }

    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }

    
    componentDidMount() {
        const newState = {}
        InterDb.getAllVal()
            .then(AllVal => newState.AllVal = AllVal)
            .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))
            ;
    }

    
 

    render() {

        const divStyle = {
            backgroundImage: 'url({AllCoins.img} )',
          };
        return (
            this.state.AllVal.map(AllVal => {
                return < div key={AllVal.id} className="flip-card">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                               
                                <h3><div>User ID: {AllVal.userId}</div></h3>
                                <h3> <div>Coin Id : {AllVal.coinId}</div></h3> 
                                 <h3> <div>Still working on it</div></h3>
                               
                            </div>
                            <div className="flip-card-back">
                            <h4></h4>
                                <h4><div></div>
                                    <div>Hope to have MVP by end of weekend,This seems to be the last piece and its being stubborn</div></h4>
                                     <button className ="aDiv"id="tryThis"type="submit" className="button1">Remove From Portfolio</button> 

                            </div>
                        </div>
                    </ div>
                </div>





            })


        )
    }
}
