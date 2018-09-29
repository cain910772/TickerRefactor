import React, { Component } from 'react';
import InterDb from '../../Modules/InterDb';
import MyCoinsContainer from "./MyCoinsContainer"

export default Object.create(null,{
  getAlert :{
  
  value:function(){alert(
  ' hello!!'
)
 }},

 getAlert2 :{

  value:function(coinid,userid){
let userCoin = {"coinId":coinid,"userId":userid}
InterDb.postVal(userCoin)

  }
 },


 getAlert3 :{

  value:function(id){InterDb.getAllVal()
    .then(coins=>{coins.forEach(coin => {
      if(coin.coinId === id){
        InterDb.deleteCoin(coin.id)
        window.location.reload(); 
    }
  },
    )})}}})
