import React, { Component } from 'react';
const axios = require('axios');



   
        
        export default class CryptoCompare extends React.Component {
          constructor(props) {
            super(props)
        

                  function getPrices(){
                      return axios.get('https://api.nomics.com/v1/markets/prices?key=abbd7aaf06ef54409bc8d4d12a936cdb')
                  }
                  function getMarkets(){
                      return axios.get('https://api.nomics.com/v1/markets?key=abbd7aaf06ef54409bc8d4d12a936cdb')
                  }
     
         axios.all([getPrices(),getMarkets()])
         .then(axios.spread(function(prices,market){
    }
         ))}

         

          render() {
            return (
              <React.Fragment>

              </React.Fragment>
            )
          }
        
        }
