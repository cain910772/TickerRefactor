const remoteURL = "http://localhost:5002"

export default Object.create(null, {

    getAllVal: {
        value: function () {
           return fetch(`${remoteURL}/valueintersection`).then(e=>e.json())
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

    
    })