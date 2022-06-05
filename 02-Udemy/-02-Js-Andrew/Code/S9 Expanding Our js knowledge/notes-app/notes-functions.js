"use strict";

// **  Read exiting notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};

//** Save the notes to localStorage */
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//** remove note from the list */
const removeNote = (noteId) => {
  const noteIndex = notes.findIndex((note) => note.id === noteId);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// ** Generate the DOM structure for a note
const generateDomNote = (note) => {
  const noteDiv = document.createElement("div");
  const textEle = document.createElement("a");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  noteDiv.appendChild(deleteBtn);

  deleteBtn.onclick = () => {
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
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byName") {
    return notes.sort((a, b) => {
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
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  div.innerHTML = "";

  filteredNotes.forEach((note) => {
    const textEle = generateDomNote(note);
    div.appendChild(textEle);
  });
};

const generateLastEdited = (timeStamp) =>
  `Last edit ${moment(timeStamp).fromNow()}`;
