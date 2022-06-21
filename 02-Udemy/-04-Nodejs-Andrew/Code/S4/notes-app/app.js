import validator from 'validator'
import getNotes from './notes.js'
import chalk from 'chalk'

console.log(getNotes())

console.log(validator.isEmail('text@test.com'))

console.log(chalk.yellow.inverse.bold('Warning'))

