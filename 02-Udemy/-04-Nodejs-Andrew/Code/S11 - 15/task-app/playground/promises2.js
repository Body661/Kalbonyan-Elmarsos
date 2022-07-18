require('../src/db/mongoose');
const Task = require('../src/models/tasks')

// Task.deleteOne({ _id: '62c2dfdb2e865c771d0144e6' }).then(() => {
//     return Task.countDocuments({ completed: false });
// }).then(count => {
//     console.log(count);
// }).catch(err => { console.log(err) });

const delteTaskAndCount = async (id, completed) => {
    await Task.deleteOne({ _id: id })
    const count = Task.countDocuments({ completed });
    return count
}

delteTaskAndCount('62c571d9c8b9651327ce4fc8', false).then(count => {
    console.log(count)
}).catch(err => { console.log(err) });