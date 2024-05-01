// /*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
     loop: true,
     spaceBetween: 32,
     grabCursor: true,
   
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
   
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   
     breakpoints:{
       600: {
         slidesPerView: 2,
       },
       968: {
         slidesPerView: 3,
       },
     },
   });

//    /*=============== SWIPER JS ===============*/
let tesmonial = new Swiper(".testomonialcard", {
     loop: true,
     spaceBetween: 25,
     grabCursor: true,
   
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
   
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   
     breakpoints:{
       600: {
         slidesPerView: 1,
       },
       968: {
         slidesPerView: 1,
       },
     },
   });