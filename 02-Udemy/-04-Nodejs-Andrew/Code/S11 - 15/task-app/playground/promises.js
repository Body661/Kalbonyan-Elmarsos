require('../src/db/mongoose');
const User = require('../src/models/user')


// User.findByIdAndUpdate('62c34f39ffd98e091e8277eb', { age: 46 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 46 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const getUser = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

getUser('62c42009288fd6a999d984c0', 30).then(count => {
    console.log(count)
}).catch(err => {
    console.log(err)
})