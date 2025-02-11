if (document.querySelector(".section-3__swiper")) {
  new Swiper(".section-3__swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-3__swiper-wrapper .swiper-button-next",
      prevEl: ".section-3__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-3__swiper-wrapper .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      991.8: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
  });
}

if (document.querySelector(".section-5__swiper")) {
  new Swiper(".section-5__swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-5__swiper-wrapper .swiper-button-next",
      prevEl: ".section-5__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-5__swiper-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 3,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

if (document.querySelector(".section-7__swipers")) {
  const swiper = new Swiper(".section-7__thumbswiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    breakpoints: {
      991.8: {
        slidesPerView: 4,
      },
      1230: {
        slidesPerView: 5,
      },
    },
  });
  new Swiper(".section-7__swiper", {
    navigation: {
      nextEl: ".section-7__swipers .swiper-button-next",
      prevEl: ".section-7__swipers .swiper-button-prev",
    },
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}

if (document.querySelector(".section-10__swiper")) {
  new Swiper(".section-10__swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    pagination: {
      el: ".section-10__control .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-10__control .swiper-button-next",
      prevEl: ".section-10__control .swiper-button-prev",
    },
  });
}

if (document.querySelector(".section-14__swiper-big")) {
  new Swiper(".section-14__swiper-big", {
    spaceBetween: 5,
    slidesPerView: 1,
    touchMove: false,
    draggable: false,
    pagination: {
      el: ".section-14__control .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-14__control .swiper-button-next",
      prevEl: ".section-14__control .swiper-button-prev",
    },
    breakpoints: {
      767.98: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 3,
      },
    },
  });
}
if (document.querySelectorAll(".section-14__slide").length > 0) {
  const swipers = document.querySelectorAll(".section-14__slide-top");
  if(swipers.length > 0) {
    swipers.forEach(swiperTop => {
      const top = swiperTop.querySelector(".section-14__swiper");
      const bottom = swiperTop.querySelector(".section-14__thumbswiper");
      const prev = swiperTop.querySelector(".section-14__swiper .swiper-button-prev");
      const next = swiperTop.querySelector(".section-14__swiper .swiper-button-next");
      
      const thumbSwiper = new Swiper(bottom, {
        spaceBetween: 8,
        slidesPerView: 4,
      });
      new Swiper(top, {
        spaceBetween: 10,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        thumbs: {
          swiper: thumbSwiper,
        },
      });
    })
  }
}

if (document.querySelector(".section-21__swiper")) {
  new Swiper(".section-21__swiper", {
    spaceBetween: 15,
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints:{
      991.8:{
        spaceBetween: 30
      }
    }
  });
}







if (document.querySelector(".maintaining-cleanliness__swiper")) {
  new Swiper(".maintaining-cleanliness__swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: ".maintaining-cleanliness__swiper-next",
      prevEl: ".maintaining-cleanliness__swiper-prev",
    },
  });
}
const swiperWrappers = document.querySelectorAll(".finished-stairs__item");
if (swiperWrappers) {
  swiperWrappers.forEach((wrapper) => {
    const thumbSwiper = wrapper.querySelector(".finished-stairs__thumbswiper");
    const mainSwiper = wrapper.querySelector(".finished-stairs__swiper");
    const next = wrapper.querySelector(".finished-stairs__swiper-next");
    const prev = wrapper.querySelector(".finished-stairs__swiper-prev");

    const swiper = new Swiper(thumbSwiper, {
      spaceBetween: 17,
      slidesPerView: 3,
      watchSlidesProgress: true,
    });
    new Swiper(mainSwiper, {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      thumbs: {
        swiper: swiper,
      },
    });
  });
}

const casesWrappers = document.querySelectorAll(".cases__inner-wrapper");
if (casesWrappers) {
  casesWrappers.forEach((casesWripper) => {
    const casesSwiper = casesWripper.querySelector(".cases__inner");
    const prev = casesWripper.querySelector(".cases__inner-prev");
    const next = casesWripper.querySelector(".cases__inner-next");
    new Swiper(casesSwiper, {
      spaceBetween: 9,
      slidesPerView: 1,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 9,
        },
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });

    const innerSwipers = casesSwiper.querySelectorAll(".cases__item-swipers");
    if (innerSwipers) {
      innerSwipers.forEach((innerSwiper) => {
        const mainSwiper = innerSwiper.querySelector(".cases__mainswiper");
        const thumbSwiper = innerSwiper.querySelector(".cases__thumbswiper");
        const prev = innerSwiper.querySelector(".cases__item-prev");
        const next = innerSwiper.querySelector(".cases__item-next");

        const swiper = new Swiper(thumbSwiper, {
          spaceBetween: 17,
          slidesPerView: 3,
          watchSlidesProgress: true,
          breakpoints: {
            575: {
              slidesPerView: 4,
            },
          },
        });
        new Swiper(mainSwiper, {
          spaceBetween: 10,
          slidesPerView: 1,
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          thumbs: {
            swiper: swiper,
          },
        });
      });
    }
  });
}

const partners = document.querySelector(".partners__inner");
if (partners) {
  const partnerSwiper = partners.querySelector(".partners__swiper");
  const prev = partners.querySelector(".partners__swiper-prev");
  const next = partners.querySelector(".partners__swiper-next");
  new Swiper(partnerSwiper, {
    spaceBetween: 15,
    slidesPerView: 1,
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1230: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
}

const reviews = document.querySelectorAll(".reviews__content-swiper");
if (reviews) {
  reviews.forEach((review) => {
    const prev = review.querySelector(".reviews__swiper-prev");
    const next = review.querySelector(".reviews__swiper-next");
    new Swiper(review, {
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  });
}

if (document.querySelector(".certificates__swiper")) {
  new Swiper(".certificates__swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
    navigation: {
      nextEl: ".certificates__swiper-next",
      prevEl: ".certificates__swiper-prev",
    },
  });
}

if (document.querySelector(".article-examples__swiper")) {
  new Swiper(".article-examples__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".article-examples__swiper-next",
      prevEl: ".article-examples__swiper-prev",
    },
  });
}
