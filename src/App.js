import React, { Component } from 'react';
import './App.css';
import MyNavBar from "./Components/MyNavBar"
import MyExchanges from './Components/MyExchanges';
import Home from "./Components/Home"
import MyCoins from "./Components/MyCoins"
import Markets from "./Components/Markets"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyCrypto from "./Components/MyCrypto"





class App extends Component {

  render() {
    return (


      <Router>

        <div>
        <MyNavBar />  
      
      
        
          <Route exact path="/" component={Home} />
          <Route path="/MyExchanges" component={MyExchanges} />
          <Route path="/MyCoins" component={MyCoins} />
          <Route path="/Markets" component={Markets} />
          <Route path="/MyCrypto" component={MyCrypto} />
        </div>
      </Router>
    );
  }
}

export default App;
