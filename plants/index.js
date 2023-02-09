const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('#nav');
const navItems = document.querySelector('.nav-list');



burgerMenu.addEventListener('click', function () {
  (function toggle() {
    document.body.style.overflow = (document.body.style.overflow == 'hidden') ? '' : 'hidden';
  })();

  navMenu.classList.toggle('_active');
  burgerMenu.classList.toggle('_active');
  navItems.classList.toggle('_active');

});


navItems.addEventListener("click", function () {
  if (navMenu.classList.contains('_active')) {
    navMenu.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
    navItems.classList.toggle('_active')
    document.body.style.overflow = "";
  }
});


document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == navItems || navItems.contains(target);
  let its_burger = target == burgerMenu;
  let menu_is_active = navMenu.classList.contains('_active');
  let menu_items_is_active = navItems.classList.contains('_active');

  if (!its_menu && !its_burger && menu_is_active && menu_items_is_active) {
    navMenu.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
    navItems.classList.toggle('_active')

    document.body.style.overflow = "";
  }
})





const pricesItemsButton = document.querySelectorAll('.arr-prices');
const pricesItems = document.querySelectorAll('.prices-item');
const accordionContent = document.querySelectorAll('.accordion-content');

pricesItemsButton[0].addEventListener('click', function () {
  if (pricesItems[0].classList.contains("__active-accordion")) {
    pricesItems[0].classList.remove("__active-accordion");
    pricesItemsButton[0].style.rotate = '';
    accordionContent[0].style.display = "none";
  } else {
    pricesItemsButton[0].style.rotate = '180deg';
    pricesItems[0].classList.add("__active-accordion");
    accordionContent[0].style.display = "block";
    pricesItems[1].classList.remove("__active-accordion");
    accordionContent[1].style.display = "none";
    pricesItemsButton[1].style.rotate = '';
    pricesItems[2].classList.remove("__active-accordion");
    accordionContent[2].style.display = "none";
    pricesItemsButton[2].style.rotate = '';

  }

})
pricesItemsButton[1].addEventListener('click', function () {
  if (pricesItems[1].classList.contains("__active-accordion")) {
    pricesItems[1].classList.remove("__active-accordion");
    accordionContent[1].style.display = "none";
    pricesItemsButton[1].style.rotate = '';

  } else {
    pricesItemsButton[1].style.rotate = '180deg';
    pricesItems[1].classList.add("__active-accordion");
    accordionContent[1].style.display = "block";
    pricesItems[0].classList.remove("__active-accordion");
    accordionContent[0].style.display = "none";
    pricesItemsButton[0].style.rotate = '';
    pricesItems[2].classList.remove("__active-accordion");
    accordionContent[2].style.display = "none";
    pricesItemsButton[2].style.rotate = '';

  }
})
pricesItemsButton[2].addEventListener('click', function () {
  if (pricesItems[2].classList.contains("__active-accordion")) {
    pricesItems[2].classList.remove("__active-accordion");
    accordionContent[2].style.display = "none";
    pricesItemsButton[2].style.rotate = '';

  } else {
    pricesItemsButton[2].style.rotate = '180deg';
    pricesItems[2].classList.add("__active-accordion");
    accordionContent[2].style.display = "block";
    pricesItems[1].classList.remove("__active-accordion");
    accordionContent[1].style.display = "none";
    pricesItemsButton[1].style.rotate = '';
    pricesItems[0].classList.remove("__active-accordion");
    accordionContent[0].style.display = "none";
    pricesItemsButton[0].style.rotate = '';

  }
})


const gardenCards = document.querySelectorAll('.garden');
const plantingCards = document.querySelectorAll('.planting');
const lawnCards = document.querySelectorAll('.lawn');
const gardenBut = document.querySelector('.but-garden');
const plantingBut = document.querySelector('.but-planting');
const lawnBut = document.querySelector('.but-lawn');


gardenBut.addEventListener('click', function () {
  if (!gardenBut.classList.contains('__active')) {
    gardenBut.classList.add('__active');
    plantingBut.classList.remove('__active');
    lawnBut.classList.remove('__active');
    for (let i = 0; i < gardenCards.length; i++) {
      gardenCards[i].classList.remove('__blured');
    }
    for (let i = 0; i < plantingCards.length; i++) {
      plantingCards[i].classList.add('__blured');
    }
    for (let i = 0; i < lawnCards.length; i++) {
      lawnCards[i].classList.add('__blured');
    }
  } else {
    gardenBut.classList.remove('__active');
    for (let i = 0; i < plantingCards.length; i++) {
      plantingCards[i].classList.remove('__blured');
    }
    for (let i = 0; i < lawnCards.length; i++) {
      lawnCards[i].classList.remove('__blured');
    }
  }
})

plantingBut.addEventListener('click', function () {
  if (!plantingBut.classList.contains('__active')) {
    plantingBut.classList.add('__active');
    gardenBut.classList.remove('__active');
    lawnBut.classList.remove('__active');
    for (let i = 0; i < plantingCards.length; i++) {
      plantingCards[i].classList.remove('__blured');
    }
    for (let i = 0; i < gardenCards.length; i++) {
      gardenCards[i].classList.add('__blured');
    }
    for (let i = 0; i < lawnCards.length; i++) {
      lawnCards[i].classList.add('__blured');
    }
  } else {
    plantingBut.classList.remove('__active');
    for (let i = 0; i < gardenCards.length; i++) {
      gardenCards[i].classList.remove('__blured');
    }
    for (let i = 0; i < lawnCards.length; i++) {
      lawnCards[i].classList.remove('__blured');
    }
  }
})

lawnBut.addEventListener('click', function () {
  if (!lawnBut.classList.contains('__active')) {
    lawnBut.classList.add('__active');
    gardenBut.classList.remove('__active');
    plantingBut.classList.remove('__active');
    for (let i = 0; i < lawnCards.length; i++) {
      lawnCards[i].classList.remove('__blured');
    }
    for (let i = 0; i < plantingCards.length; i++) {
      plantingCards[i].classList.add('__blured');
    }
    for (let i = 0; i < gardenCards.length; i++) {
      gardenCards[i].classList.add('__blured');
    }
  } else {
    lawnBut.classList.remove('__active');
    for (let i = 0; i < plantingCards.length; i++) {
      plantingCards[i].classList.remove('__blured');
    }
    for (let i = 0; i < gardenCards.length; i++) {
      gardenCards[i].classList.remove('__blured');
    }
  }
})


const cityBut = document.querySelector('#city .arr');
const cityMenu = document.querySelector('#city');
const cityOptions = document.querySelectorAll('.cityname-block');
const cityOptionsBlock = document.querySelector('.city-options');

cityBut.addEventListener('click', function () {
  cityRes.style.display = 'none';

  if (!cityMenu.classList.contains('__active-city-menu')) {
    cityBut.style.rotate = '180deg';
    cityMenu.classList.add('__active-city-menu');
    cityOptionsBlock.style.display = 'block';
    for (let i = 0; i < cityOptions.length; i++) {
      cityOptions[i].style.display = 'block';
    }
  } else {
    cityBut.style.rotate = '';
    cityOptionsBlock.style.display = 'none';

    cityMenu.classList.remove('__active-city-menu');
    for (let i = 0; i < cityOptions.length; i++) {
      cityOptions[i].style.display = 'none';
    }
  }
})

const cityRes = document.querySelector('.city-results');

for (let i = 0; i < cityOptions.length; i++) {
  cityOptions[i].addEventListener('click', function () {
    cityRes.style.display = 'block';
    document.querySelector('.city-name').textContent = document.querySelectorAll('.cityname-block')[i].textContent;
    document.querySelector('.city-name-res').textContent = document.querySelectorAll('.cityname-block')[i].textContent;
    document.querySelector('.phone-res').textContent = cityOptions[i].dataset.phone;
    document.querySelector('.adress-res').textContent = cityOptions[i].dataset.adress;
    cityOptionsBlock.style.display = 'none';
    cityBut.style.rotate = '';
    cityMenu.classList.remove('__active-city-menu');
    cityMenu.style.background = '#C1E698';
    document.querySelector('.res-button-call').setAttribute("href", `tel: ${cityOptions[i].dataset.phone}`)
  })

}

console.log("Plants#3");
console.log('1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50-10 т.к. сложности с пунктом: Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur.При этом пользователь не может нажать одновременно все три кнопки услуг.При повторном нажатии на активную кнопку она деактивируется(становится неактивной) + 20(!10, т.к. при повторном нажатии на кнопку она деактивируется)\n');
console.log('2. Accordion в секции prices реализация 3 - х выпадающих списков об услугах и ценах + 50\n');
console.log('3. В разделе contacts реализован select с выбором городов + 25\n');
console.log('Итог: 40 + 50 + 25 = 115 из 125');