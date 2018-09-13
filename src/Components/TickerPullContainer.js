// import React from "react"
// import { BrowserRouter as Router, Route } from 'react-router-dom'


// export default class TickerPullContainer extends React.Component{

//     state = {
//         MyCoins:[]
//     }


// componentDidMount(){
//     const newState={}

//     fetch(" https://api.coinmarketcap.com/v2/ticker/")
//     .then(res =>{
//         return res.json();
//     })
//         .then(MyCoins =>newState.MyCoins= MyCoins)
//         .then(()=>this.setState(newState))
        
//           }
        

 

// render(){
//     return(
//         <React.Fragment>
//         <Route exact path="/MyCoins" render={(props) => {
//             return <newState mycoins={this.state.mycoins} />
           
//         }} /> 
//         </React.Fragment>
//     )}}