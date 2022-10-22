console.log(
  'Travel Part 2 :\n1. Слайдер изображений в секции destinations +50 \nна десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20\nТри точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20\nАнимации плавного перемещения для слайдера +10\n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\nлогин попап соответствует верстке его закрытие происходит при клике вне попапа +25\nлогин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\n3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\nИтого: 125 из 125.'
);

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

  initialSlide: 1,
  slidesPerView: "auto",
  centeredSlides: true,
  simulateTouch: true,

  grabCursor: true,
  slideToClickedSlide: true,
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let popup_login = document.getElementById("popup_login");
let popupBtn1 = document.getElementById("login_btn");
let singUp = document.getElementById("popup_singUp");
let popupBtn2 = document.getElementById("register");
let popupBtn3 = document.getElementById("login_btn1");
let popupBtnMob = document.getElementById("account");

window.onclick = function (e) {
  if (e.target == singUp || e.target == popup_login) {
    popup_login.style.display = "none";
    singUp.style.display = "none";
  }
};

popupBtnMob.onclick = function () {
  popup_login.style.display = "block";
};

popupBtn1.onclick = function () {
  popup_login.style.display = "block";
};

popupBtn2.onclick = function () {
  popup_login.style.display = "none";
  singUp.style.display = "block";
};
popupBtn3.onclick = function () {
  popup_login.style.display = "block";
  singUp.style.display = "none";
};

const form = document.getElementById("form");
const form2 = document.getElementById("form_2");

function getFormValue(event) {
  event.preventDefault();

  const email = form.querySelector('[name="email"]'),
    password = form.querySelector('[name="password"]');

  const values = {
    email: email.value,
    password: password.value,
  };

  //console.log(values);
  alert(`Your E-mail: ${email.value}, Your Password: ${password.value}`);
}
form.addEventListener("submit", getFormValue);

function getFormValue2(event) {
  event.preventDefault();

  const email2 = form2.querySelector('[name="email"]'),
    password2 = form2.querySelector('[name="password"]');

  const values = {
    email2: email2.value,
    password2: password2.value,
  };

  //console.log(values);
  alert(`Your E-mail: ${email2.value}, Your Password: ${password2.value}`);
}

form2.addEventListener("submit", getFormValue2);
