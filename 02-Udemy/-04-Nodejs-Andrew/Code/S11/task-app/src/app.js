const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/tasks')
const { default: mongoose } = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const newUser = new User({ name: req.body.name, email: req.body.email, password: req.body.password, age: req.body.age })
    newUser.save().then(() => {
        res.status(201).send(newUser)
    }).catch(err => {
        res.status(400).send(err)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then(user => {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.post('/tasks', (req, res) => {
    const newTask = new Task({ title: req.body.title, completed: req.body.completed })
    newTask.save().then(() => {
        res.status(201).send(newTask)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then(task => {
        if (!task) {
            return res.status(404).send()
        }

        return res.send(task)
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.listen(port, () => {
    console.log('listening on port')
})