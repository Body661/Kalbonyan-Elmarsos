const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOne, userOneId, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

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

test('Should upload avatar', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update name', async () => {
    await request(app)
        .patch('/users/me/')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({ name: 'Memo' })
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toBe('Memo')
})

test('Should not update user', async () => {
    await request(app)
        .patch('/users/me/')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({ location: "Paris" })
        .expect(400)
})