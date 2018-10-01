import InterDb from '../../Modules/InterDb';

export default Object.create(null, {
  getAlert: {

    value: function () {
      alert(
        ' hello!!'
      )
    }
  },

  getAlert2: {

    value: function (coinid, userid) {
      let userCoin = { "coinId": coinid, "userId": userid }
      InterDb.postVal(userCoin)
      alert("Saved to Portfolio")
    }
  },


  getAlert3: {

    value: function (id) {
      InterDb.getAllVal()
      .then(coins => {
        coins.forEach(coin => {
          if (coin.coinId === id) {
            InterDb.deleteCoin(coin.id)
            alert("Removed from portfolio")
            window.location.reload();
          }
        },
        )
      })
    }
  }
})
