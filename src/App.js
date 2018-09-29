import React, { Component } from 'react';
import './App.css';
import MyNavBar from "./Components/MyNavBar"
import Home from "./Components/Home/Home"
import AllCoinsDisplay from "./Components/AllCoins/AllCoinsDisplay"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyCoinsDisplay from "./Components/MyCoins/MyCoinsDisplay"
import Login from "./Login"
import MyExchanges from "./Components/MyExchanges"
import Register from "./Register"
import MyCryptoContainer from "./Components/MyCoins/MyCoinsContainer"
import MyJumbotron from './Components/MyJumbotron';
import { InstantSearch } from 'react-instantsearch-dom';
import ReactDOM from 'react-dom';


class App extends Component {
 
  render() {
    return (

      <Router>
        <div>
       <MyJumbotron />
         <Route path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/AllCoins/AllCoinsDisplay" component={AllCoinsDisplay} />
          <Route path="/MyCoinsDisplay" component={MyCoinsDisplay} />
          <Route path="/MyExchanges" component={MyExchanges} />
          <Route path="/Register" component={Register}/>
           </div>
      </Router>
    );
  }
}

export default App;
