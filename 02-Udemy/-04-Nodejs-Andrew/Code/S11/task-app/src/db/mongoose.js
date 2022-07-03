const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//     },
//     age: {
//         type: Number,
//     }
// })

// const me = new User({ name: 'Abdolrahman', age: 16 })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log(err)
// })

const Tasks = mongoose.model('Task', {
    title: {
        type: String,
    },
    completed: {
        type: Boolean,
    }
})

const firstTask = new Tasks({ title: 'Hiiiii', completed: true })

firstTask.save().then(() => { console.log(firstTask) }).catch((err) => { console.log(err) })