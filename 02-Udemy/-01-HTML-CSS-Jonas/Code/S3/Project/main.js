let menu = document.querySelector(".menu");
let showPosts = document.querySelector(".arrow-left");
let hidePosts = document.querySelector(".arrow-right");

let nav = document.querySelector(".nav");
let aside = document.querySelector("aside");

menu.onclick = function () {
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};

showPosts.onclick = function () {
  aside.style.display = "flex";

  hidePosts.onclick = function () {
    if (aside.style.display === "flex") {
      aside.style.display = "none";
    }
  };
};
