const remoteURL = "http://localhost:5002"

export default Object.create(null, {

    getAllVal: {
        value: function () {
            return fetch(`${remoteURL}/valueintersection`).then(e => e.json())
        }
    },
    getValCoin: {
        value: function (key) {
            return fetch(`${remoteURL}/valueIntersection/${key}?coinId`).then(e => e.json())
        }
    },
    getValUser: {
        value: function (userId) {
            return fetch(`${remoteURL}/valueintersection/?userId=${userId}`).then(e => e.json())
        }
    },
    postVal: {
        value: (coinId, userId) => {
            return fetch(`${remoteURL}/valueintersection`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(coinId, userId),

            }
            )
        }
    },
    deleteCoin: {
        value: function (id) {
            return fetch(`${remoteURL}/valueintersection/${id}`, {
                method: "delete"
            })
                .then(e => e.json())

        }

    }
})