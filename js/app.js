// Light-dark statement
// Btn
const btn = document.getElementById('myCheck');
// Items( Selectors )
const darkBg = document.querySelectorAll('.transform-bg');
const darkText = document.querySelectorAll('.transform-text');
const darkShadow = document.querySelectorAll('.transform-shadow');
const sideMenuDiv = document.getElementById('side-menu');
const logo = document.getElementById('logo');
const logoOnPage = document.getElementById('logo-on-page');

(function changeState() {
  btn.addEventListener('click', function () {
    for (let i = 0; i < darkBg.length; i++) {
      darkBg[i].classList.toggle('dark-bg');
    }

    for (let i = 0; i < darkText.length; i++) {
      darkText[i].classList.toggle('dark-text');
    }

    for (let i = 0; i < darkShadow.length; i++) {
      darkShadow[i].classList.toggle('dark-shadow');
    }

    logo.classList.toggle('white-logo');
    logoOnPage.classList.toggle('white-logo-on-page');
    sideMenuDiv.classList.toggle('dark-border');
  });
})();

// Burger-menu
// Btn
const dotsMenu = document.querySelector('.dots-container');
// Items

const icon = document.querySelectorAll('.icon');
const liItem = document.querySelectorAll('.menu-item');

(function openMenu() {
  dotsMenu.addEventListener('click', function () {
    sideMenuDiv.classList.toggle('display-menu-div');

    for (let i = 0; i < icon.length; i++) {
      icon[i].classList.toggle('display-icon');
    }

    for (let i = 0; i < liItem.length; i++) {
      liItem[i].classList.toggle('display-liItem');
    }
  });
})();

(function closeMenu() {
  dotsMenu.addEventListener('click', function () {
    for (let i = 0; i < liItem.length; i++) {
      liItem[i].onclick = function () {
        if (sideMenuDiv.classList.contains('display-menu-div')) {
          sideMenuDiv.classList.remove('display-menu-div');

          for (let i = 0; i < icon.length; i++) {
            icon[i].classList.remove('display-icon');
          }

          for (let i = 0; i < liItem.length; i++) {
            liItem[i].classList.remove('display-liItem');
          }
        }
      }
    }
  });
})();


// Menu( current-state )

const sections = document.querySelectorAll('.current-state');

window.addEventListener('scroll', function currentState() {
  let current = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  liItem.forEach(function (li) {
    li.classList.remove('current-page');
    if (li.classList.contains(current)) {
      li.classList.add('current-page');
    }
  });
});