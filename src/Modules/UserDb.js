
const remoteURL = "http://localhost:5002"

export default Object.create(null, {

     getAllUsers: {
        value: function () {
           return fetch(`${remoteURL}/users`).then(e=>e.json())
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
   },
   
    
//    apipull:{
//        value: function(){
//    fetch(url, {
//     method: 'GET',
//     withCredentials: true,
//     credentials: 'include',
//     headers: {
//         'Authorization': bearer,
//         'X-FP-API-KEY': 'iphone',
//         'Content-Type': 'application/json'}
//     }).then((responseJson) => {
//         var items = JSON.parse(responseJson._bodyInit);
//     })
//     .catch(error => this.setState({
//     isLoading: false,
//     message: 'Something bad happened ' + error
//     }))
//    }
//    }})
})
