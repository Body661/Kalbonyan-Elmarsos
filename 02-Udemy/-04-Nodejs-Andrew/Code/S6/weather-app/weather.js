const request = require("request")

const weather = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=81d10404134a299b4cc00192c84a4edc&query=${latitude},${longitude}&units=m`
    request({ url, json: true }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to weather service')
        } else if (body.error) {
            console.log('Unable to find location')
        } else {
            callback(body)
            // console.log(`its crrently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = weather