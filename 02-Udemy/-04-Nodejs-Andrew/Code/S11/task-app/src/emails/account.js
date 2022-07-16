
const sgMail = require('@sendgrid/mail')

const APIKey = "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"

sgMail.setApiKey(APIKey)
sgMail.send({
    to: 'abdelrahmanelhagrasy661@gmail.com',
    from: 'abdelrahmanelhagrasy661@gmail.com',
    subject: 'Hi Ahmed',
    text: 'wow'
})