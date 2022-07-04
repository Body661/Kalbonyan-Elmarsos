const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/user', (req, res) => {
    const newUser = new User({ name: req.body.name, email: req.body.email, password: req.body.password, age: req.body.age })
    newUser.save().then(() => {
        res.status(201).send(newUser)
    }).catch(err => {
        res.status(400).send(err)
    })
})

app.post('/task', (req, res) => {
    const newTask = new Task({ title: req.body.title, completed: req.body.completed })
    newTask.save().then(() => {
        res.status(201).send(newTask)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('listening on port')
})