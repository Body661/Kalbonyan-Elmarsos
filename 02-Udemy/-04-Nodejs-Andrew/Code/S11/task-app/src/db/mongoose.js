const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (value.trim().length === 0) {
//                 throw new Error('Please enter a valid username')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Please enter a valid age')
//             }

//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Please enter a valid email address')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cant include "password" ')
//             }
//         }
//     }
// })

// const me = new User({ name: 'Abdolrahman', age: 16, email: 'user@example.com', password: 'body123456' })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log(err)
// })

const Tasks = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const firstTask = new Tasks({ title: 'Hiiiii' })

firstTask.save().then(() => { console.log(firstTask) }).catch((err) => { console.log(err) })