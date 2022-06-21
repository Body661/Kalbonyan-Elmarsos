// import getNotes from './notes.js'
// import chalk from 'chalk'
// import yargs from 'yargs';
//"type": "module",

const { command, version } = require("yargs");
const yargs = require("yargs");


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title'
        }
    },
    handler: (argv) => {
        console.log('adding new note' , argv.title)
    }
}).parse()

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: () => {
        console.log('Removing note')
    }
}).parse()

yargs.command({
    command: 'list',
    describe: 'show list',
    handler: () => {
        console.log('List')
    }
}).parse()

yargs.command({
    command: 'read',
    describe: 'read',
    handler: () => {
        console.log('read')
    }
}).parse()