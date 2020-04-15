let navContent = document.getElementById('navContent');
let menuButton = document.getElementById('menuButton');
var ogImg;
var hiddenNav = 1;
for (i=0;i<navContent.classList.length;i++) {
  if (navContent.classList[i] == "show") {
    hiddenNav = 0;
    break;
  }
  else {
    continue;
  }
}
function dropdown() {
  if (hiddenNav == 0) {
    navContent.classList.remove("show");
    hiddenNav++;
    if (altMenuBtn!==false) {
      if (menuButton.dataset.src != "") {
        ogImg = menuButton.src;
        menuButton.src = menuButton.dataset.src;
        menuButton.dataset.src = ogImg;
      }
      else {}
    }
    else {}
  }
  else {
    navContent.classList.add("show");
    hiddenNav--;
    if (altMenuBtn!==false) {
      if (menuButton.dataset.src != "") {
        altImg = menuButton.src;
        menuButton.src = menuButton.dataset.src;
        menuButton.dataset.src = altImg;
      }
      else {}
    }
  }
}

const pixel = {
  modal: function(modal, cover) {
    var modal = document.getElementById(modal);
    var cover = document.getElementById(cover);
    if (modal.style.display == "flex") {
      modal.style.display = "none";
      cover.style.display = "none";
    }
    else {
      modal.style.display = "flex";
      cover.style.display = "block";
    }
  }
}
