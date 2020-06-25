

@@include('swiper.js', {})
@@include('app.js', {})



/* let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
   let user_menu = document.querySelector('.user-header__menu');
   user_menu.classList.toggle('_active');
});

// Menu писаное с экрана
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
   iconMenu.addEventListener("click", function () {
      iconMenu.classList.toggle("_active");
      body.classList.toggle("lock");
      menuBody.classList.toggle("_active");
   });
}

document.documentElement.addEventListener("click", function (e) {
   if (!e.target.closest('.user-header')) {
      let user_menu = document.querySelector('.user-header__menu');
      user_menu.classList.remove('_active');
   }
}); */
// END Menu писаное с экрана

/* function ibg() {
   if (isIE()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();
 */


