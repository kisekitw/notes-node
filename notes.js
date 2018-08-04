console.log('Starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

var saveNodes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


// module.exports.addNote = (title, body) => {
//     console.log('addNote');
//     return 'New Note';
// };

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNodes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];

};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNodes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('------------');
    console.log(`Title: ${note.title}, Body: ${note.body}`);
};

// Must be the last to the Method definition
module.exports = {
    addNote: addNote, //=== addNote
    getAll,
    getNote,
    removeNote,
    logNote
};
 





