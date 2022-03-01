
// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 20,
    },
  },
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//首頁下方的swiper
$(function () {
  const userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');
  if (userRecommendSwiper) {
    const swiper = new Swiper('.js-swiper-user-recommend', {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 3,
        fill: 'column',
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
      },
    });
  }

  //surroundings.html 下方的swiper
  const coursesRecommendSwiper = document.querySelector('.js-swiper-courses-recommend');
  if (coursesRecommendSwiper) {
    const swiper = new Swiper('.js-swiper-courses-recommend', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          centeredSlides: false,
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
});

//course.html 下方swiper
const teachersSwiper = document.querySelector('.js-swiper-teachers');
if (teachersSwiper) {
  const swiper = new Swiper('.js-swiper-teachers', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 1,
      fill: 'row',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
    },
  });
}

// reservation-choose.html swiper
const bookingOptionSwiper = document.querySelector('.booking-option-swiper');
if (bookingOptionSwiper) {
  const swiper = new Swiper('.booking-option-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'column',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
    },
  });
}

// reservation-choose.html 下方swiper
const schemeSwiper = document.querySelector('.js-swiper-scheme');
if (schemeSwiper) {
  const swiper1 = new Swiper('.js-swiper-scheme', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
    },
  });
}

//日期
const elem = document.querySelector('input[name="datepicker"]');
if (elem) {
  const datepicker = new Datepicker(elem, {
    nextArrow: '>',
    prevArrow: '<',
    clearBtn: true,  /*清除按鈕*/
    buttonClass: 'btn text-primary',
  });
}

// 首頁 " 方案選擇 " 三顆(選擇課程)按鈕 click 時連結到 reservation-choose.html 頁面

$(function(){
  const indexBtnClick = document.querySelectorAll('.js_indexBtn_click');
  $(indexBtnClick).on('click', function(){
    location.href = './reservation-choose.html';
    console.log(indexBtnClick);
  });
});