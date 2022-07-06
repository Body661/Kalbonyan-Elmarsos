const express = require('express');
const User = require('../models/user')
const router = new express.Router();

//? Add New user
router.post('/users', async (req, res) => {
    const newUser = new User({ name: req.body.name, email: req.body.email, password: req.body.password, age: req.body.age })
    try {
        await newUser.save()
        res.status(201).send(newUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

//? Get All Users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})

//?Get one user by id
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? Update user by id

router.patch('/users/:id', async (req, res) => {
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

//? Delete user by id
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;