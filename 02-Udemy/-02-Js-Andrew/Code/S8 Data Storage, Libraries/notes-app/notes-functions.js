// **  Read exiting notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//** remove note from the list */
const removeNote = function (noteId) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === noteId;
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// ** Generate the DOM structure for a note
const generateDomNote = function (note) {
  const noteDiv = document.createElement("div");
  const textEle = document.createElement("a");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  noteDiv.appendChild(deleteBtn);

  deleteBtn.onclick = function () {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  };

  textEle.setAttribute("href", `edit.html#${note.id}`);
  if (note.title.length === 0) {
    note.title = "Unnamed Note";
  }
  textEle.textContent = note.title;

  noteDiv.appendChild(textEle);
  return noteDiv;
};
//**Sort notes */
const sortNotes = function (notes, sortBy) {
  if (sortBy === "byEdited") {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byName") {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

// ** Render Notes
const renderNotes = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy);

  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  div.innerHTML = "";

  filteredNotes.forEach(function (note) {
    const textEle = generateDomNote(note);
    div.appendChild(textEle);
  });
};

const generateLastEdited = function (timeStamp) {
  return `Last edit ${moment(timeStamp).fromNow()}`;
};
