var swiper = new Swiper(".slide-content-brand", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-prev-brand",
      prevEl: ".swiper-button-next-brand",
    },

    breakpoints:{
        0: {
        slidesPerView: 2,
        },
        400: {
            slidesPerView: 2,
        },
        674: {
            slidesPerView: 4,
        },
        950: {
            slidesPerView: 6,
        },
    },
  });