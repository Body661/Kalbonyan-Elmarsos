"use strict";

const noteTitle = document.querySelector(".title");
const noteBody = document.querySelector(".body");
const removeBtn = document.querySelector(".remove");
const noteID = location.hash.substring(1);
let notes = getSavedNotes();

const lastEditText = document.querySelector(".last-edit");

let note = notes.find((note) => note.id === noteID);

if (!note) {
  location.assign(`/index.html`);
}

noteTitle.value = note.title;
noteBody.value = note.body;
lastEditText.textContent = generateLastEdited(note.updatedAt);

noteTitle.addEventListener("input", () => {
  note.title = noteTitle.value;
  note.updatedAt = moment().valueOf();
  lastEditText.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

noteBody.addEventListener("input", () => {
  note.body = noteBody.value;
  note.updatedAt = moment().valueOf();
  lastEditText.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeBtn.onclick = () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign(`/index.html`);
};

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    let note = notes.find(function (note) {
      return note.id === noteID;
    });

    if (!note) {
      location.assign(`/index.html`);
    }

    noteTitle.value = note.title;
    noteBody.value = note.body;
    lastEditText.textContent = generateLastEdited(note.updatedAt);
  }
});
