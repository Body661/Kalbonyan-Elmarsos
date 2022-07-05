require('../src/db/mongoose');
const User = require('../src/models/user')


User.findByIdAndUpdate('62c34f39ffd98e091e8277eb', { age: 46 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 46 })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})