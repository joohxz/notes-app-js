const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')
const { hideBin } = require('yargs/helpers');


yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
}).parse();

yargs(hideBin(process.argv)).command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
}).parse();

yargs(hideBin(process.argv)).command({
    command: 'getAll',
    describe: 'List all notes',
    handler() {
        notes.getAllNotesAndRead();
    }
}).parse();

yargs(hideBin(process.argv)).command({
    command: 'get',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
}).parse();
