const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const Filter = require('bad-words');
const { generateMessage, generateLocationMessage } = require('./utils/messages');

const app = express();
const server = http.createServer(app)
const io = socketio(server)


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')))


io.on('connection', (socket) => {
    console.log('new connection')

    socket.on('join', ({ name, room }) => {
        socket.join(room)

        socket.emit('message', generateMessage(`Welcome ${name}!`))
        socket.broadcast.to(room).emit('message', generateMessage(`${name} has joined`))
    })


    socket.on('sendMsg', (message, callback) => {
        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }

        io.to('12345').emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (location, callback) => {
        io.emit('locationMessage', generateLocationMessage(`https://www.google.com/maps?q=${location.latitude},${location.longitude}`))
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('user has disconnected'))
    })
})


server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})