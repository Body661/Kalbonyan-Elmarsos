const fs = require('fs');
const { title } = require('process');
const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require('./notes');


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'show list',
    handler: () => listNotes()
})

yargs.command({
    command: 'read',
    describe: 'read',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => readNote(argv.title)
})

yargs.parse()