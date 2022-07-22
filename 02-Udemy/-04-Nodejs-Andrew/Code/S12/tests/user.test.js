const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

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

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('should sign up new user', async () => {
    await request(app).post('/users').send({
        name: 'Abdolrahman Saleh',
        email: 'test661@gmail.com',
        password: 'Body123456.',
        age: '16'
    }).expect(201)
})

test('Should login user', async () => {
    // await request(app).post('/users/login').send({
    //     email: userOne.email,
    //     password: userOne.password
    // }).expect(200)

    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'test661@gmail.com',
        password: 'Body123456'
    }).expect(400)
})

test('Should get profile', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer oadjoiwjdiwoajdoaid`)
        .send()
        .expect(401)
})

test('Should delete account', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete account', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', 'Bearer ahdnwuindakjdnadiuandkjndkj')
        .send()
        .expect(401)
})