const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.trim().length === 0) {
                throw new Error('Please enter a valid username')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Please enter a valid age')
            }

        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please enter a valid email address')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cant include "password" ')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'el4V1rJpbu7348ZU2xWK2Io4zY2SBxC1kkOp+emLFQQONLvaIylSYt2scpWVuuv1CTRd1nBILi4QyU0XDVLLp0t1PaTRQnzy+SRg5tjl5qmV7vPsEu6Qy4TPGygYUg8aIHClCNj2W4LfVqG5wJ1nt7pxGttgIaLgA/hc3U0v4QEHCdsmmuPnCiyhE8rvtagVNcJ9gNqW7AEmgiNsFxDdV5l2rJ268cZ8iyRe8pha5pB1Dvb15HELTOUrUJuroQZi4ZDG1HS+ieH7NXSp0wGNUFLhsZD0FO8zCFuzjlc9dUFsAXjv9EATWm5r0vZXXB2JBcSh8yV7hfc8Vu68wFaZOA')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

//? Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User