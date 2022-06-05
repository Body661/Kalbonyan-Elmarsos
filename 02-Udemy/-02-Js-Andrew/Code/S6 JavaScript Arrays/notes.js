const notes = [
  {
    title: "The netherlands",
    description: "blah blah blah",
  },
  {
    title: "Spain",
    description: "meaw meaw bo",
  },
  {
    title: "France",
    description: "hi me",
  },
];

//#################################################################################################

// console.log(notes[0])

// console.log(notes.pop())
// notes.push("Note 4");

// console.log(notes.shift())
// notes.unshift("Note")

// console.log(notes.splice(1,1))

// notes.splice(2, 0, "New item")

// notes[2] = 'New Note 3'

//#################################################################################################

// notes.forEach(function(item , index ) {
//     console.log(`${index} : ${item.title}`)
// })

// for (let i = 0; i <= 3; i++){
//     console.log(`counting... ${i}`)
// }

// for (let item = 0; item < notes.length; item++){
//     console.log(`${item}: ${notes[item]}`)
// }

//#################################################################################################

// const index = notes.findIndex(function (note , index) {
//     return note.title === 'note 3'
// });
// console.log(index)

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index]
// }

//#################################################################################################

// const findNote = function (notes, noteTitle) {
//     const note = notes.find(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return note
// }

// console.log(findNote(notes , 'NoTe 2'))

//#################################################################################################

const sortNotes = function (noteList) {
  return noteList.sort(function (a, b) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);

const searchNote = function (noteList, search) {
  const filterNotes = noteList.filter(function (note) {
    return (
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase())
    );
  });
  return filterNotes;
};

console.log(searchNote(notes, ""));
