"use strict";

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 20
    }
  },
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); //首頁下方的swiper

$(function () {
  var userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');

  if (userRecommendSwiper) {
    var _swiper = new Swiper('.js-swiper-user-recommend', {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 3,
        fill: 'column'
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row'
          },
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row'
          },
          spaceBetween: 30
        }
      }
    });
  } //surroundings.html 下方的swiper


  var coursesRecommendSwiper = document.querySelector('.js-swiper-courses-recommend');

  if (coursesRecommendSwiper) {
    var _swiper2 = new Swiper('.js-swiper-courses-recommend', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30
        },
        1200: {
          centeredSlides: false,
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  }
}); //course.html 下方swiper

var teachersSwiper = document.querySelector('.js-swiper-teachers');

if (teachersSwiper) {
  var _swiper3 = new Swiper('.js-swiper-teachers', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 1,
      fill: 'row'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      }
    }
  });
} // reservation-choose.html swiper


var bookingOptionSwiper = document.querySelector('.booking-option-swiper');

if (bookingOptionSwiper) {
  var _swiper4 = new Swiper('.booking-option-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'column'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      }
    }
  });
} // reservation-choose.html 下方swiper


var schemeSwiper = document.querySelector('.js-swiper-scheme');

if (schemeSwiper) {
  var swiper1 = new Swiper('.js-swiper-scheme', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1
        }
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1
        }
      }
    }
  });
} //日期


var elem = document.querySelector('input[name="datepicker"]');

if (elem) {
  var datepicker = new Datepicker(elem, {
    nextArrow: '>',
    prevArrow: '<',
    clearBtn: true,

    /*清除按鈕*/
    buttonClass: 'btn text-primary'
  });
}
"use strict";

var formRules = {
  name: {
    rule: /^^[a-zA-Z\s\d]+$/,
    msg: '不能有特殊符號'
  },
  age: {
    rule: /^\d{2}$/,
    msg: '只能是 2 碼數字'
  },
  email: {
    rule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
    msg: '格式錯誤'
  },
  phone: {
    rule: /^09\d{8}$/,
    msg: '格式錯誤，須為 09 開頭的 10 碼數字'
  }
};
/*-----------footer 訂閱 email -------------- */

$('.js-subscription-email').on('input propertychange', function () {
  var inputName = $(this).attr('name');
  var inputValue = $(this).val();
  var rule = formRules.email.rule;
  var errorMsg = formRules.email.msg;
  var errorMsgContent = $('.js-subscription-email-msg');

  if (rule.test(inputValue)) {
    errorMsgContent.removeClass('d-block').text('');
    $('.js-subscription-btn').prop('disabled', false).addClass('btn-secondary');
  } else {
    errorMsgContent.addClass('d-block').text("".concat(inputName, " ").concat(errorMsg));
    $('.js-subscription-btn').prop('disabled', true).removeClass('btn-secondary');
  }
});
$('.js-subscription-btn').one('click', function () {
  $('.js-subscription-email').val('');
}); // 驗證欄位資料

$('#reserveName').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.name.rule,
    errorMsg: formRules.name.msg
  };
  validationInputFn(data);
});
$('#reserveAge').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.age.rule,
    errorMsg: formRules.age.msg
  };
  validationInputFn(data);
});
$('.js-form-email').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.email.rule,
    errorMsg: formRules.email.msg
  };
  validationInputFn(data);
});
$('.js-form-phone').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.phone.rule,
    errorMsg: formRules.phone.msg
  };
  validationInputFn(data);
}); // 訂課資料

$('.js-reserve-data').on('change', function () {
  var datepicker = {};
  datepicker = getDatepicker();
  checkInputValue();
});

function validationInputFn(data) {
  var borderStyle = ['border-danger', 'animate__animated', 'animate__headShake'];
  var input = data.input,
      inputValue = data.inputValue,
      rule = data.rule,
      errorMsg = data.errorMsg;
  var inputName = $(input).attr('name');
  var errorMsgContent = $(input).next();

  if (!rule.test(inputValue)) {
    input.addClass(borderStyle);
    errorMsgContent.addClass('d-block');

    if (inputValue === '') {
      $(errorMsgContent).text("".concat(inputName, " \u70BA\u5FC5\u586B"));
    } else {
      $(errorMsgContent).text("".concat(inputName, " ").concat(errorMsg));
    }
  } else {
    input.removeClass(borderStyle);
    errorMsgContent.removeClass('d-block').text('');
  }
}

function getDatepicker() {
  var inputData = {
    muscleEndurance: [],
    userData: {}
  };
  inputData.datepicker = changeDate();
  inputData.isDoYoga = $('input[name="practiseYogaRadio"]:checked').val();
  inputData.sportsTime = $('input[name="sportsTime"]:checked').val();
  inputData.muscleEndurance = getProblemBetter(getDatepicker.muscleEndurance);
  inputData.userData.name = $('#reserveName').val();
  inputData.userData.age = $('#reserveAge').val();
  inputData.userData.gender = $('#reserveGender').val();
  inputData.userData.email = $('#reserveEmail').val();
  inputData.userData.phone = $('#reservePhone').val();
  return inputData;
}

function checkInputValue() {
  var datepicker = changeDate();
  var isDoYoga = $('input[name="practiseYogaRadio"]:checked').val();
  var muscleEndurance = $('input[name="problemBetterCheckbox"]:checked').val();
  var sportsTime = $('input[name="sportsTime"]:checked').val();
  var formReserve = document.querySelectorAll('.js-form-reserve');
  var reserveArray = [isDoYoga, muscleEndurance, sportsTime, datepicker];
  var reserveBtn = $('.js-form-reserve-btn');
  formReserve.forEach(function (items) {
    reserveArray.push(items.value);
  });
  reserveArray.forEach(function (input) {
    if (input === undefined || input === '' || input === NaN || input === null) {
      reserveBtn.removeClass('btn-primary-light').addClass('btn-outline-primary-light disabled');
    } else {
      reserveBtn.removeClass('btn-outline-primary-light disabled').addClass('btn-primary-light');
    }
  });
}

function changeDate() {
  var date = $('#datepicker').val().split('/');
  return new Date("".concat(date[2], "/").concat(date[0], "/").concat(date[1])) / 1000;
}

function getProblemBetter() {
  var valueArray = [];
  $('input[name="problemBetterCheckbox"]').each(function () {
    if ($(this).prop('checked')) {
      valueArray.push($(this).val());
    }
  });
  return valueArray;
}
/*-------------------bs5驗證------------------- */
// Example starter JavaScript for disabling form submissions if there are invalid fields


(function () {
  'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
"use strict";

var schemeCards = document.querySelectorAll('.js-scheme-card');
$('.js-scheme-show').hide();
$('.js-scheme-name-show').hide();
$('.js-next-step').hide();
$('.js-experience-cards').on('click', function () {
  var courseName = $(this).attr('data-name');
  var onCilckCardClass = 'border-4';
  var unCilckCardClass = 'hover-rotate-1 hover-shadow transition-duration-1';
  var onCilckExperienceClass = 'arrow';
  var unCilckExperienceClass = 'd-none d-lg-block';
  $('.js-experience-card').removeClass(onCilckCardClass).addClass(unCilckCardClass);
  $('.js-experience-cards').removeClass(onCilckExperienceClass).toggleClass(unCilckExperienceClass);
  $(this).toggleClass(unCilckExperienceClass).toggleClass(onCilckExperienceClass);
  $(this).find('.js-experience-card').toggleClass(unCilckCardClass).toggleClass(onCilckCardClass);
  $('.js-scheme-show').slideUp().slideDown();
  $('.js-scheme-name-show').slideDown();
  $('.js-next-step').show();
  $('.js-course-name').text(courseName);
}); // 課程階級

$('.js-scheme-card').on('click', function () {
  var courseScheme = $(this).attr('data-name');
  $('.js-scheme-card').removeClass('border-white').addClass('border-transparent');
  $('.js-scheme-card').find('.material-icons-outlined').addClass('opacity-0.3');
  $(this).removeClass('border-transparent').addClass('border-white');
  $(this).find('.material-icons-outlined').removeClass('opacity-0.3');
  $('.js-course-scheme').text(courseScheme);
});
//# sourceMappingURL=all.js.map
