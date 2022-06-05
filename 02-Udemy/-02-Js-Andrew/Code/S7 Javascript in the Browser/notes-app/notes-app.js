const noteList = [
  {
    title: "Note 1",
  },
  {
    title: "Note 2",
  },
  {
    title: "Note 3",
  },
  {
    title: "Note 4",
  },
];

// search for specific note & render notes (start)

const filters = {
  searchText: "",
};

let div = document.querySelector(".notes-holder");

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  div.innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEle = document.createElement("p");
    noteEle.textContent = note.title;
    div.appendChild(noteEle);
  });
};

renderNotes(noteList, filters);

document.querySelector(".search").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(noteList, filters);
});

//end

// add btn (start)

let createBtn = document.querySelector("#create-note");
createBtn.onclick = function () {
  let newP = document.createElement("p");
  newP.textContent = "New Paragraph";
  newP.classList.add("paragraph");
  document.body.appendChild(newP);
};

// end

let sortBy = document.querySelector("#sort-by");
sortBy.addEventListener("change", function (e) {
  console.log(e.target.value);
});
