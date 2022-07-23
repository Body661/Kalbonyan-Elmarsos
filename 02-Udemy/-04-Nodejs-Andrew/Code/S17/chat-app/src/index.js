const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app)
const io = socketio(server)


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')))


io.on('connection', (socket) => {
    console.log('new connection')

    // socket.emit('countUpdate', count)

    // socket.on('increment', () => {
    //     count++
    // socket.emit('countUpdate', count)
    //     io.emit('countUpdate', count)
    // })

    socket.emit('message', 'Welcome!')
    socket.broadcast.emit('message', 'a new user has joined')

    socket.on('sendMsg', (message, callback) => {
        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (location, callback) => {
        io.emit('message', `https://www.google.com/maps?q=${location.latitude},${location.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'user has disconnect')
    })
})


server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})