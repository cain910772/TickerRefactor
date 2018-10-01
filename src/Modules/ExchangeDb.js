const remoteURL = "http://localhost:5002"

export default Object.create(null, {


    getExchanges:{
        value: function (){
            return fetch(`${remoteURL}/exchanges`).then(e=>e.json())
        }
        },
        
    })