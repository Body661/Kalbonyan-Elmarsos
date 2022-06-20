const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file is created by node js.')

fs.appendFileSync('notes.txt', ' This message was appended')