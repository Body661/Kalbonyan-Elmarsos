const request = require("request")

const geocode = (place, callback) => {
    request({ url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYm9keTY2MSIsImEiOiJjbDR0dmZmbXowdTZiM2RwOHB6bjNjNTR1In0.t8-r2j4TT3oh8XVdExa7dQ&limit=1`, json: true }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to location service')
        } else if (body.features.length === 0) {
            console.log('Unable to find location')
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            callback(latitude, longitude)
        }
    })
}

module.exports = geocode