 // import Swiper JS
 import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';


 // init Swiper:
 export const swiper = new Swiper('.swiper', {
	// autoplay: true,
  clickable: true,
	
  breakpoints: {
    240: {
      slidesPerView: 1,
	    spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})