const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'el4V1rJpbu7348ZU2xWK2Io4zY2SBxC1kkOp+emLFQQONLvaIylSYt2scpWVuuv1CTRd1nBILi4QyU0XDVLLp0t1PaTRQnzy+SRg5tjl5qmV7vPsEu6Qy4TPGygYUg8aIHClCNj2W4LfVqG5wJ1nt7pxGttgIaLgA/hc3U0v4QEHCdsmmuPnCiyhE8rvtagVNcJ9gNqW7AEmgiNsFxDdV5l2rJ268cZ8iyRe8pha5pB1Dvb15HELTOUrUJuroQZi4ZDG1HS+ieH7NXSp0wGNUFLhsZD0FO8zCFuzjlc9dUFsAXjv9EATWm5r0vZXXB2JBcSh8yV7hfc8Vu68wFaZOA')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth