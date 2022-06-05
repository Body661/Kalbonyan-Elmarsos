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
    const noteEl = document.createElement("a");
    const textEle = document.createElement("p");
    const status = document.createElement('p')

    if (note.title.length === 0) {
        note.title = "Unnamed Note";
    }
    textEle.textContent = note.title;
    textEle.classList.add('list-item__title')
    noteEl.appendChild(textEle);

    noteEl.setAttribute("href", `edit.html#${note.id}`);
    noteEl.classList.add('list-item')

    status.textContent = generateLastEdited(note.updatedAt)
    status.classList.add('list-item__subtitle')
    noteEl.appendChild(status)

    return noteEl;
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
    let div = document.querySelector(".notes-holder");

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    );

    div.innerHTML = "";


    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const textEle = generateDomNote(note);
            div.appendChild(textEle);
        });
    } else {
        const noNotes = document.createElement('p')
        noNotes.textContent = 'No notes to show'
        noNotes.classList.add('empty-message')
        div.appendChild(noNotes)
    }

};

const generateLastEdited = (timeStamp) => `Last edit ${moment(timeStamp).fromNow()}`;
