const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//? Add New user
app.post('/users', async (req, res) => {
    const newUser = new User({ name: req.body.name, email: req.body.email, password: req.body.password, age: req.body.age })
    try {
        await newUser.save()
        res.status(201).send(newUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

//? Get All Users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})

//?Get one user by id
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findByI
        d(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? Update user by id

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

    if (!isValidUpdate) {
        return res.status(400).send({ err: 'Invalid updates' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

//? Add new Task
app.post('/tasks', async (req, res) => {
    const newTask = new Task({ title: req.body.title, completed: req.body.completed })

    try {
        await newTask.save()
        res.status(201).send(newTask)
    } catch (err) {
        res.status(400).send(err)
    }
})

//? Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? Get One Task by id
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }

        return res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? updating task with id
app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'completed']
    const isValidUpdate = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidUpdate) {
        return res.status(400).send({ err: 'Invalid updates' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})


app.listen(port, () => {
    console.log('listening on port')
})