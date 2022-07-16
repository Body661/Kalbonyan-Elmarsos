
const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(APIKey)
sgMail.send({
    to: 'abdelrahmanelhagrasy661@gmail.com',
    from: 'abdelrahmanelhagrasy661@gmail.com',
    subject: 'Hi Ahmed',
    text: 'wow'
})