const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/tasks')
const { default: mongoose } = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const newUser = new User({ name: req.body.name, email: req.body.email, password: req.body.password, age: req.body.age })
    try {
        await newUser.save()
        res.status(201).send(newUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

app.get('/users', async (req, res) => {
    const users = await User.find({})

    try {
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    const user = await User.findById(_id)
    try {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.post('/tasks', async (req, res) => {
    const newTask = new Task({ title: req.body.title, completed: req.body.completed })
    await newTask.save()

    try {
        res.status(201).send(newTask)
    } catch (err) {
        res.status(400).send(err)
    }
})

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})

    try {
        res.send(tasks)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    const task = await Task.findById(_id)

    try {
        if (!task) {
            return res.status(404).send()
        }

        return res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.listen(port, () => {
    console.log('listening on port')
})