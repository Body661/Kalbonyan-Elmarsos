const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Abdolrahman'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Abdolrahman'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Help'
    })
})

app.set('view engine', 'hbs')

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Abdolrahman'
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: '18 degrees',
        location: 'Amsterdam'
    })
})

app.listen(3000, () => {
    console.log('server in up on port 3000')
})