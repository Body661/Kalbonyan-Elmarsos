const request = require('request')

// const url = `http://api.weatherstack.com/current?access_key=81d10404134a299b4cc00192c84a4edc&query=37.8267,-122.4233&units=m`
// request({ url, json: true }, (error, response, body) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`its crrently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
//     }
// })


request({ url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiYm9keTY2MSIsImEiOiJjbDR0dmZmbXowdTZiM2RwOHB6bjNjNTR1In0.t8-r2j4TT3oh8XVdExa7dQ&limit=1', json: true }, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to location service')
    } else if (body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const latitude = body.features[0].center[1]
        const longitude = body.features[0].center[0]
        console.log(latitude, longitude)
    }
})