
const remoteURL = "http://localhost:5002"

export default Object.create(null, {

    getAll: {
        value: function () {
           return fetch("http://localhost:5002")
        }
     },


myCoinIntersection:{
    value: function(id){
return fetch(`${remoteURL}/allcoins${id}`)
.then(fetch(`${remoteURL}/users${id}`))
    }
},


getExchanges:{
    value: function (){
        return fetch(`${remoteURL}/exchanges`).then(e=>e.json())
    }
    },



    getCoin:{
    value: function (id){
        return fetch(`${remoteURL}/allcoins/${id}`).then(e=>e.json())
    }
    },
    getValCoin:{
        value: function (key){
            return fetch(`${remoteURL}/valueIntersection/${key}?coinId`).then(e=>e.json())
        }
    },
    getValUser:{
        value: function (key,userId){
            return fetch(`${remoteURL}/valueIntersection/${key}/?userId=${userId}`).then(e=>e.json())
        }
    },
   getAllCoin:{
value: function (){
    return fetch(`${remoteURL}/allcoins`).then(e=>e.json())
}
   },
   postCoin: {
    value: (key,object) => {
       return fetch(`${remoteURL}/valueIntersection/${key}?coinId`, {
          method: "POST",
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify(object)
       }).then(e => e.json())
    }
 },
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
   postVal: {
    value: (key,object) => {
       return fetch(`$http://localhost:5002/valueIntersection/${key}?userId`, {
          method: "POST",
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify(object)})
   
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