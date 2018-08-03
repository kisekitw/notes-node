console.log('Starting notes.js')

const fs = require('fs');

// module.exports.addNote = (title, body) => {
//     console.log('addNote');
//     return 'New Note';
// };

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (error) {
        
    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Read a note', title);
};

var removeNote = (title) => {
    console.log('Remove a note', title);
}

// Must be the last to the Method definition
module.exports = {
    addNote: addNote, //=== addNote
    getAll,
    getNote,
    removeNote
};
 





