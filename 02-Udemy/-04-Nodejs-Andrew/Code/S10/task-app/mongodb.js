const MongoClient = require('mongodb').MongoClient;

const connect = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connect, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'abdolrahman',
    //     age: 16
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        { description: 'Math', completed: true },
        { description: 'Cat', completed: false },
        { description: 'Arabic', completed: false },
    ]
        , (err, result) => {
            if (err) {
                return console.log('Unable to insert user')
            }

            console.log(result.ops)
        })
})