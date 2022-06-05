let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".closebtn");

menu.onclick = function () {
  overlay.classList.add("nav-open");
};
close.onclick = function () {
  this.parentElement.classList.remove("nav-open");
};

let head = document.querySelector("header");
function header() {
  if (window.scrollY >= 600) {
    head.classList.add("header-scroll");
  } else {
    head.classList.remove("header-scroll");
  }
}

let imgBox = document.querySelector(".img-box");
let textBox = document.querySelector(".text-box");

function back() {
  if (window.scrollY >= 700) {
    imgBox.classList.add("back-to-page");
    textBox.classList.add("back-to-page");
  } else {
  }
}
window.onscroll = function () {
  header();
  back();
};
