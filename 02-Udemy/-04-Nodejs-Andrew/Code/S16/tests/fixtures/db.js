const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/tasks')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Ahmed',
    email: 'ahmed@example.com',
    password: '123456789',
    age: 14,
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.WEBTOKEN_SECRET_KEY)
    }]
}
const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'abdolrahman',
    email: 'abdolrahman@example.com',
    password: '123456789',
    age: 16,
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.WEBTOKEN_SECRET_KEY)
    }]
}

const taskOne = {
    owner: userTwoId,
    _id: new mongoose.Types.ObjectId(),
    title: 'Task',
}
const taskTwo = {
    owner: userOneId,
    _id: new mongoose.Types.ObjectId(),
    title: 'Task 2',
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
}

module.exports = { userOne, userOneId, setupDatabase, userTwo, taskOne, taskTwo }