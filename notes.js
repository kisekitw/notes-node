console.log('Starting notes.js')

// module.exports.addNote = (title, body) => {
//     console.log('addNote');
//     return 'New Note';
// };
var addNote = (title, body) => {
    console.log('Adding Note', title, body);
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
 





