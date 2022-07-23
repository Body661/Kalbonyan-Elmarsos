const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

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

    socket.on('sendMsg', (message) => {
        io.emit('message', message)
    })
})

server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})