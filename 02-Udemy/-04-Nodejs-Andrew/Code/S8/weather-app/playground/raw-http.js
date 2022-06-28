const { error } = require('console')
const https = require('https')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/amstedam.json?access_token=pk.eyJ1IjoiYm9keTY2MSIsImEiOiJjbDR0dmZmbXowdTZiM2RwOHB6bjNjNTR1In0.t8-r2j4TT3oh8XVdExa7dQ&limit=1'
const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error has take a place', error)
})

request.end()