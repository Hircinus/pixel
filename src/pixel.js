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
for (i=0;i<navbar.classList.length;i++) {
  if (navbar.classList[i] == "sticky") {
    navbarSticky = true;
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
    if (modal.style.display == "block") {
      modal.style.display = "none";
      cover.style.display = "none";
    }
    else {
      modal.style.display = "block";
      cover.style.display = "block";
    }
  },
  editCookie: function(cname, newValue) {
    var cookies = document.cookie;
    indCookies = cookies.split(";");
    for(i=0;i<indCookies.length;i++) {
      parts = indCookies[i].split("=");
      name = parts[0];
      if(cname==name) {
        parts[1] = newValue;
        return newValue;
        break;
      }
      else {
        continue;
      }
    }
    return false;
  },
  getCookie: function(cname) {
    var cookies = document.cookie;
    indCookies = cookies.split(";");
    for(i=0;i<indCookies.length;i++) {
      parts = indCookies[i].split("=");
      name = parts[0];
      if(cname==name) {
        cvalue = parts[1];
        return cvalue;
        break;
      }
      else {
        continue;
      }
    }
    return false;
  },
  addCookie: function(cname, value) {
    var newCookie = cname + "=" + value;
    document.cookie += newCookie;
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
    if(navbarSticky==true) {
      var headerHeight = getComputedStyle(navbar).height.split('px')[0];
      var scrollValue = window.scrollY;

      if (scrollValue - 150 > headerHeight) {
        navbar.classList.add('fixed');
      }
      else if (scrollValue < headerHeight) {
        navbar.classList.remove('fixed');
      }
    }
    else {}
  },
}
if(navbarSticky==true) { window.addEventListener('scroll', pixel.stickyElement); }
