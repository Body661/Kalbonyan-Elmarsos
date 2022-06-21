//? -> 9
const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file is created by node js.')

* fs.appendFileSync('notes.txt', ' This message was appended')

//? -> 10

const { name, add } = require('./utils.js')

console.log(name)
const sum = add(1, 2)
console.log(sum)