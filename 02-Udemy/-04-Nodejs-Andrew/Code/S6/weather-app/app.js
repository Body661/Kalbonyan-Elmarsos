const geocode = require('./geocode')
const weather = require('./weather')

geocode('amsterdam', (latitude, longitude) => {
    weather(latitude, longitude, (body) => {
        console.log(`its crrently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
    })
}) 