require('../src/db/mongoose');
const Task = require('../src/models/tasks')

Task.deleteOne({ _id: '62c2dfdb2e865c771d0144e6' }).then(() => {
    return Task.countDocuments({ completed: false });
}).then(count => {
    console.log(count);
}).catch(err => { console.log(err) });