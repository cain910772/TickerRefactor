const remoteURL = "http://localhost:5002"

export default Object.create(null, {


    getCoin:{
        value: function (name){
            return fetch(`${remoteURL}/allcoins/${name}`).then(e=>e.json())
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

    })