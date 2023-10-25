// new Swiper(".mySwiper-first", {
//   slidesPerView: 3,  
//   // loop: true,
//   autoplay: {
//       delay: 1000,
//   },
//   speed: 3000,          
// })


new Swiper('.mySwiper-first', {
  loop: true,
  speed: 500,
  slidesPerView: 6,      
  autoplay: {
      delay: 0,
  },
})



    new Swiper(".mySwiper-first", {
      loop: true,
      slidesPerView: 6,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
      delay: 6,
      },
      speed: 1000,
      breakpoints: {
          220: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768:{
              slidesPerView: 4
          },
          992: {
            slidesPerView: 5,
          },
          1180 :{
              slidesPerView: 6,
          },
        }
  });
  
  
  


new Swiper(".mySwiper-second", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
    delay: 6,
    },
    speed: 2000,
});


AOS.init();