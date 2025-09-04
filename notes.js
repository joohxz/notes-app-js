const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = getAllNotes();
    const duplicateNote = notes.find((note) => {note.title == title})
    if(!duplicateNote) {
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk.green('File added written sucessfully'))
    } else {
        console.log(chalk.red('Error: The title already exists in another note'))
    }
};

const getAllNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    } 
};

const getAllNotesAndRead = () => {
    notes = getAllNotes();
    console.log(chalk.inverse('See your notes below:'));
    notes.map(note => {
        console.log('Title: ' + note.title + ', Body: ' + note.body);
    })
};

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync(notes.JSON, data);

    console.log(chalk.green("Notes were sucessfully saved!"));
}; 

const removeNote = (title) => {
    const notes = getAllNotes;
    const notesWithoutTitle = notes.find(note => note.title !== title);

    if(notes > notesWithoutTitle){
        console.log(chalk.green("Note removed!"));
    } else {
        console.log(chalk.red("No one note was found with this title to remove."));
    }
}

const getNote = (title) => {
    const notes = getAllNotes;
    const note = notes.find(note => note.title == title);

    if(note){
        console.log(chalk.green(note))
    } else {
        console.log(chalk.red("No one note was found with this title."));
    }
}