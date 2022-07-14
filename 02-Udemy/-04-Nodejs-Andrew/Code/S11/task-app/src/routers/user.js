const express = require('express');
const User = require('../models/user')
const router = new express.Router();
const auth = require('../middleware/auth')
const multer = require('multer')


//? Add New user
router.post('/users', async (req, res) => {
    const newUser = new User(req.body)
    try {
        await newUser.save()
        const token = await newUser.generateAuthToken()
        res.status(201).send({ newUser, token })
    } catch (err) {
        res.status(400).send(err)
    }
})

//? user Login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (err) {
        res.status(400).send()
    }
})

//? User Logout
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()

        res.send()
    } catch (err) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (err) {
        res.status(500).send()
    }

})

//? Get User profile
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

// //?Get one user by id
// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id
//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (err) {
//         res.status(500).send(err)
//     }
// })

//? Update user by id
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

    if (!isValidUpdate) {
        return res.status(400).send({ err: 'Invalid updates' })
    }

    try {
        // const user = await User.findById(req.params.id)
        updates.forEach(update => req.user[update] = req.body[update])
        req.user.save()

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        // if (!user) {
        //     return res.status(404).send()
        // }

        res.send(req.user)
    } catch (err) {
        res.status(400).send(err)
    }
})

//? Delete user by id
router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        // if (!user) {
        //     return res.status(404).send()
        // }

        await req.user.remove()
        res.send(req.user)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? Add user profile picture
const upload = multer({
    dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {

        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return cb(new Error('Please Upload an image'))
        }

        cb(undefined, true)
    }
})
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    res.send()
})

module.exports = router;