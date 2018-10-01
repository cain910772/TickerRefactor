


export default Object.create(null, {

    cmcPull: {
        value: function () {
            return fetch("https://api.coinmarketcap.com/v2/ticker/?limit=30").then(e => e.json())
        }
    },

    myDbPull: {
        value: function () {
            return fetch("http://localhost:5002/exchangevalues").then(e => e.json())
        }
    },
    myCoinPulls: {
        value: function () {
            return fetch('https://api.cryptonator.com/api/full/btc-usd')
                .then(fetch('https://api.cryptonator.com/api/full/ltc-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/xrp-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/doge-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/dash-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/xmr-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/bcn-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/bts-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/xlm-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/usdt-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/xem-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/eth-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/dcr-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/lsk-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/etc-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/neo-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/zec-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/mkr-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/nano-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/miota-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/eos-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/omg-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/bch-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/bnb-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/trx-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/ada-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/xtz-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/btg-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/ont-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/vet-usd'))
                .then(fetch('https://api.cryptonator.com/api/full/ltc-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/xrp-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/doge-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/dash-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/xmr-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/bcn-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/bts-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/xlm-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/usdt-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/xem-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/eth-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/dcr-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/lsk-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/etc-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/neo-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/zec-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/mkr-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/nano-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/miota-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/eos-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/omg-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/bch-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/bnb-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/trx-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/ada-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/xtz-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/btg-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/ont-btc'))
                .then(fetch('https://api.cryptonator.com/api/full/vet-btc'))
                .then(e => e.text())
        }
    },

bigPullVal: {
    value: (...object) => {
        return fetch(`  http://localhost:5002/exchangevalues`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(object),

        }
        )
    }
}

})

