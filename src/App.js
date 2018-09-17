import React, { Component } from 'react';
import './App.css';
import MyNavBar from "./Components/MyNavBar"
import Home from "./Components/Home"
import MyCoins from "./Components/MyCoins"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyCrypto from "./Components/MyCrypto"
import Login from "./Login"
import MyExchanges from "./Components/MyExchanges"
import TickerPullContainer from './Components/TickerPullContainer';



class App extends Component {

  render() {
    return (


      <Router>

        <div>
        <MyNavBar /> 
         <Home />
         <Route path="/Login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/MyCoins" component={MyCoins} />
          <Route path="/MyCrypto" component={MyCrypto} />
          <Route path="/MyExchanges" component={MyExchanges} />

        </div>
      </Router>
    );
  }
}

export default App;
