let navContent = document.getElementById('navContent');
let menuButton = document.getElementById('menuButton');
let navbar = document.getElementById("navbar");
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
  },
  navbarExtend: function() {
    if (hiddenNav == 0) {
      navContent.classList.remove("show");
      hiddenNav++;
      if (menuButton.dataset.src != "") {
        ogImg = menuButton.src;
        menuButton.src = menuButton.dataset.src;
        menuButton.dataset.src = ogImg;
      }
      else {}
    }
    else {
      navContent.classList.add("show");
      hiddenNav--;
      if (menuButton.dataset.src != "") {
        altImg = menuButton.src;
        menuButton.src = menuButton.dataset.src;
        menuButton.dataset.src = altImg;
      }
      else {}
    }
  },
  stickyElement: function() {
    var headerHeight = getComputedStyle(navbar).height.split('px')[0];
    var scrollValue = window.scrollY;

    if (scrollValue - 200 > headerHeight) {
      navbar.classList.add('fixed');
    }
    else if (scrollValue < headerHeight) {
      navbar.classList.remove('fixed');
    }
  },
}
window.addEventListener('scroll', pixel.stickyElement);
