"use strict";

let notes = getSavedNotes();

// ** rendering and searching for notes
const filters = {
  searchText: "",
  sortBy: "byEdited",
};

let div = document.querySelector(".notes-holder");

renderNotes(notes, filters);

document.querySelector(".search").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// **  Creating new note & add it to localStorage
let createBtn = document.querySelector("#create-note");
createBtn.onclick = () => {
  const id = uuidv4();
  const timeStamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timeStamp,
    updatedAt: timeStamp,
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
};

// **  Sorting Notes
let sortBy = document.querySelector("#sort-by");

sortBy.addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
