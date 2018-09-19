import React, { Component } from 'react';
import MyJumboTron from "./MyJumbotron"
import DataManager from "../Modules/DataManager"
import MyCryptoContainer from "./MyCryptoContainer"



export default class MyCoins extends Component{

    

render(){
    return(
<div>

<div> <button className="button1">Save to Portfolio</button></div>
<MyCryptoContainer />
<div></div>
    
</div>
    )}}