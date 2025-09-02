const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = getAllNotes();
    const duplicateNote = notes.find((note) => {note.title == title})
    if(!duplicateNote) {
        notes.push({title, body});
        console.log(chalk.green('File added written sucessfully'))
    } else {
        console.log(chalk.red('Error: The title already exists in another note'))
    }
}

const getAllNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    } 
}