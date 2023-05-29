let initSliders = () => {
  if (document.querySelector('[data-swiper="trainers"]')) {
    const swiperTrainers = new Swiper('[data-swiper="trainers"]', {
      speed: 400,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      lazyPreloadPrevNext: 1,
      loop: true,
      navigation: {
        nextEl: '[data-card="next"]',
        prevEl: '[data-card="prev"]',
      },
      lazy: true,
    });
  }

  if (document.querySelector('[data-swiper="reviews"]')) {
    const swiperReviews = new Swiper('[data-swiper="reviews"]', {
      speed: 400,
      slidesPerView: 1,
      lazyPreloadPrevNext: 1,
      loop: false,
      navigation: {
        nextEl: '[data-reviews="next"]',
        prevEl: '[data-reviews="prev"]',
      },
      lazy: true,
    });
  }
};

export {initSliders};
