// import React, { Component } from 'react';
// import InterDb from "../../Modules/InterDb"
// import "../AllCoins/allcoins.css"
// import Buttons from '../MyCoins/Buttons.js';
// import CoinDb from '../../Modules/CoinDb';
// import BigPull from "./BigPull"
// import ApiDb from '../../Modules/ApiDb';

// // import TickerPullContainer from "../TickerPullContainer"
// export default class MyCoinBack extends Component {

//     state = {

//         //  AllCoins:[],

//         myDbPull: []
//     }

//     handleFieldChange = evt => {
//         console.log("evt handleFieldChange", evt);
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }


//     componentDidMount() {
//         const newState = {}
//         // let ourId = JSON.parse(sessionStorage.getItem("user")) 
//         // InterDb.getValUser(ourId.id)
//         // .then(AllVal => newState.AllVal = AllVal)
//         // .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))



//         //     CoinDb.getAllCoin()
//         //     .then(AllCoins => newState.AllCoins = AllCoins)
//         //     .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))


//         ApiDb.myDbPull()
//             .then(myDbPull => newState.myDbPull = myDbPull)
//             .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state) }))

//     }




//     render() {
//         // let val=[]
//         // let coins = []
//         // this.state.AllCoins.forEach(coin => {
//         //     this.state.AllVal.forEach(Val =>{
//         //      if(coin.id === Val.coinId){
//         //          coins.push(coin)
//         //          val.push(Val.id)
//         //      }})})






//         // let coinPull =[]
//         // this.state.AllCoins.forEach(coin => {
//         // this.state.myDbPull.forEach(eachPull =>{
//         // if(coin.symbol===eachPull.base){
//         //     coinPull.push(eachPull)
//         //     console.log(coinPull)

//         // }})})
//         // console.log(coinPull)

//         return (
//             this.state.myDbPull.map(myDbPull => {
//                 return < div key={myDbPull.id} className="flip-card">
//                     <div className="flip-card-back">
//                         <div className="flip-card-inner">

//                             <h3> <div>Coin Name:{myDbPull.base}</div></h3>
//                             <h5> <div>Coin Price: $ {myDbPull.target} :{myDbPull.price}</div></h5>
//                             <div><p>{myDbPull.market1}price:{myDbPull.price1} </p>
//                                 <p>{myDbPull.market2} price:{myDbPull.price2} </p>
//                                 {/* <p>{myDbPull.market3} price:{myDbPull.price3} </p>
//                                 <p>{myDbPull.market4} price:{myDbPull.price4} </p>
//                                 <p>{myDbPull.market5} price:{myDbPull.price5} </p>
//                                 <p>{myDbPull.market6} price:{myDbPull.price6} </p>
//                                 <p>{myDbPull.market7} price:{myDbPull.price7} </p>
//                                 <p>{myDbPull.market8} price:{myDbPull.price8} </p>
//                                 <p>{myDbPull.market9} price:{myDbPull.price9} </p>
//                                 <p>{myDbPull.market10} price:{myDbPull.price10} </p>
//                                 <p>{myDbPull.market11} price:{myDbPull.price11} </p>
//                                 <p>{myDbPull.market12} price:{myDbPull.price12} </p> */}
//                             </div>
//                         </div>

//                         <div> </div>
//                     </div>


//                 </div>






//             })

//         )
//     }
// }
