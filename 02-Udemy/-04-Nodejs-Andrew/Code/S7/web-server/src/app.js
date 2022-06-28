const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

// Define paths for Express config
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Abdolrahman Saleh'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Abdolrahman Saleh '
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Help',
        name: 'Abdolrahman Saleh'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '18 degrees',
        location: 'Amsterdam'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        erorrMsg: 'Help article not found'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        erorrMsg: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server in up on port 3000')
})