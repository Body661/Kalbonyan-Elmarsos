const generateMessage = (text) => {
    return {
        text,
        timeStamp: new Date().getTime(),
    }
}

const generateLocationMessage = (url) => {
    return {
        url,
        timeStamp: new Date().getTime(),
    }
}

module.exports = { generateMessage, generateLocationMessage }