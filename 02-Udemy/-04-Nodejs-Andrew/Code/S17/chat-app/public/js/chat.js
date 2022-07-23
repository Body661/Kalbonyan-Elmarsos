const socket = io()

const msgForm = document.querySelector('.msg-form')
const userMsg = document.querySelector('.msg')
const msgSendBtn = document.querySelector('.msg-btn')

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
    socket.emit('sendMsg', userMsg.value, (error) => {

        if (error) {
            return console.log(error)
        }

        console.log('Message delivered successfully')
    })
    userMsg.value = ''
})

const locationBtn = document.querySelector('.location-btn')
locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared')
        })
    })
})