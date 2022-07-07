const express = require('express');
const Task = require('../models/tasks')
const router = new express.Router();

//? Add new Task
router.post('/tasks', async (req, res) => {
    const newTask = new Task({ title: req.body.title, completed: req.body.completed })

    try {
        await newTask.save()
        res.status(201).send(newTask)
    } catch (err) {
        res.status(400).send(err)
    }
})

//? Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? Get One Task by id
router.get('/tasks/:id', async (req, res) => {
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
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'completed']
    const isValidUpdate = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidUpdate) {
        return res.status(400).send({ err: 'Invalid updates' })
    }

    try {

        //* const task = await Task.findById(req.params.id)
        //* updates.forEach(update => {
        //*     task[update] = req.body[update]
        //* })
        //* await task.save()

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? Delete task by id
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router