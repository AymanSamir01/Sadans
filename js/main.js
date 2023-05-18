//header movement
let header = document.querySelector("header");
let div = document.querySelector(".logo");
let change = document.querySelector(".ch-size");
window.onscroll = function () {
  if (window.scrollY >= header.offsetTop + 100) {
    header.classList.add("header-scroll");
    div.classList.add("up-to-top");
    change.classList.add("change-size");
  } else if (window.scrollY == header.offsetTop) {
    header.classList.remove("header-scroll");
    div.classList.remove("up-to-top");
    change.classList.remove("change-size");
  }
};
//responsive toggle menu clickable
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.classList.add("bg-gray");
  } else {
    x.className = "topnav";
  }
}
//default gallery tab

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
