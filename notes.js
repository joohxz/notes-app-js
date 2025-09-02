const fs = require('fs');
const chalk = require('chalk');
const { error } = require('console');

const addNote = (title, body) => {
    const fileContent = title + '\n\n' + body;
    fs.writeFile('notes.txt', fileContent, (error) => {
        if(error) {
            console.log('An error ocurred when was tried to write the file');
            return;
        }

        console.log('File written sucessfully');
    });
}