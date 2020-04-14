let navContent = document.getElementById('nav-content');
let menuButton = document.getElementById('menu_button');
let nav = document.getElementById('nav');
var dark = 0;
for (i=0;i<nav.classList.length;i++) {
  if(nav.classList[i] == "dark") {
    dark = 1;
    break;
  }
  else {
    continue;
  }
}
function dropdown() {
  if (navContent.style.display == "block") {
    navContent.style.display = "none";
    if (dark == 1) {
      menuButton.src = "menu_burger-light.svg";
    }
    else {
      menuButton.src = "menu_burger.svg";
    }
  }
  else {
    navContent.style.display = "block";
    if (dark == 1) {
      menuButton.src = "menu_close-light.svg";
    }
    else {
      menuButton.src = "menu_close.svg";
    }
  }
}
