// Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu !=null) {
   let delay = 500;
   let body = document.querySelector("body");
   let menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", (e) => {
      if (!body.classList.contains('_wait')) {
         body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
      }
   });
};