const remoteURL = "http://localhost:5002"

export default Object.create(null, {

    getAll: {
        value: function () {
           return fetch("http://localhost:5002")
        }
     },


   getUser: {
      value: function (id) {
         return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
      }
   },
   getAllUsers: {
      value: function () {
         return fetch(`${remoteURL}/users`).then(e => e.json())
      }
   },
//    getACoin:{
//     value: function (){
//         return fetch(`${remoteURL}/AllCoins`).then(e=>e.json())
//     },
   getAllCoins:{
value: function (){
    return fetch(`${remoteURL}/AllCoins`).then(e=>e.json())
}
   },
//    postCoin: {
//     value: (coinId) => {
//        return fetch(`${remoteURL}/valueint/${coinId}`, {
//           method: "POST",
//           headers: {
//              "Content-Type": "application/json"
//           },
//           body: JSON.stringify(coinId)
//        }).then(e => e.json())
//     }
//  },
   postUser: {
      value: (key, object) => {
         return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(object) })
            .then(e => e.json()) 
       
      }
   },
   postValUser: {
    value: (usersId, coinId) => {
       return fetch(`${remoteURL}/valueint`, {
          method: "PUT",
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify(usersId, coinId)})
       .then(e => e.json())
    }
 },
   update: {
      value: function (user, id) {
         return fetch(`${remoteURL}/users/${id}`, {
            method: "Put",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         }).then(e => e.json())
      }
   }
}
)
// 672d85d41c6700f001f0dcde8a32f6f272e8e43c