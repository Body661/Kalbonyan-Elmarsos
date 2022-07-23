const socket = io()

const msgForm = document.querySelector('.msg-form')
const userMsg = document.querySelector('.msg')
const msgSendBtn = document.querySelector('.msg-btn')
const locationBtn = document.querySelector('.location-btn')

socket.on('message', (message) => {
    console.log(message)
})

msgForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (userMsg.value.trim().length === 0) {
        return console.log('Please enter a message')
    }

    msgSendBtn.setAttribute('disabled', 'disabled')

    socket.emit('sendMsg', userMsg.value, (error) => {
        userMsg.value = ''
        msgSendBtn.removeAttribute('disabled')
        userMsg.focus()

        if (error) {
            return console.log(error)
        }

        console.log('Message delivered successfully')
    })
})


locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    locationBtn.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            locationBtn.removeAttribute('disabled')
            console.log('Location shared')
        })
    })
})