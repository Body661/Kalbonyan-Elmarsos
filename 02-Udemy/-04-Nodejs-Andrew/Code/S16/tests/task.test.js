const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/tasks')
const { userOne, setupDatabase, userTwo, taskTwo, taskOne } = require('./fixtures/db')

beforeEach(setupDatabase)

test('should create task', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({ title: 'New Task' })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
})

test('should get tasks', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(200)
    expect(response.body.length).toBe(1)
})

test('should not delete tasks', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(404)

    const task = await Task.findById(taskTwo._id)
    expect(task).not.toBeNull()
})