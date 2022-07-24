const socket = io()

// Elements
const msgForm = document.querySelector('.msg-form')
const userMsg = document.querySelector('.msg')
const msgSendBtn = document.querySelector('.msg-btn')
const locationBtn = document.querySelector('.location-btn')
const messages = document.querySelector('.messages')

// Templates
const messageTemplate = document.querySelector('.message-template').innerHTML
const locationMessageTemplate = document.querySelector('.location-message-template').innerHTML

// Options
const { name, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

// Recive Message
socket.on('message', (message) => {
    const html = Mustache.render(messageTemplate, {
        name: message.name,
        message: message.text,
        time: moment(message.timeStamp).format('h:mm a')
    })
    messages.insertAdjacentHTML('beforeend', html)
})

// Recive Location Message
socket.on('locationMessage', (location) => {
    const html = Mustache.render(locationMessageTemplate, {
        name: location.name,
        url: location.url,
        time: moment(location.timeStamp).format('h:mm a')
    })
    messages.insertAdjacentHTML('beforeend', html)
})

// Send Message
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

// Send Location Message
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

socket.emit('join', { name, room }, (error) => {
    if (error) {
        alert(error)
        location.href = '/'
    }
})