const socket = io()

const msgForm = document.querySelector('.msg-form')
const userMsg = document.querySelector('.msg')

// const incrementBtn = document.querySelector('.increment')

// socket.on('countUpdate', (count) => {
//     console.log('countUpdate completed ' + count)
// })

// incrementBtn.addEventListener('click', () => {
//     socket.emit('increment')
// })


socket.on('message', (message) => {
    console.log(message)
})

msgForm.addEventListener('submit', (e) => {
    e.preventDefault()
    socket.emit('sendMsg', userMsg.value)
})