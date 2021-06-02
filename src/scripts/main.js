'use strict';
/* eslint-disable */

window.onload = function() {
  const btn1 = document.querySelector(".header__bg-slider-number--01");
  const btn2 = document.querySelector(".header__bg-slider-number--02");
  const btn3 = document.querySelector(".header__bg-slider-number--03");
  const btn4 = document.querySelector(".header__slider-number--01");
  const btn5 = document.querySelector(".header__slider-number--02");
  const btn6 = document.querySelector(".header__slider-number--03");

  btn1.addEventListener('click', () => {
    document.querySelector(".header").style.backgroundImage = "url(/head.c6782c52.jpg)";
    document.querySelector('.header__description').style.color = '#412d22';
  })
  btn2.addEventListener('click', () => {
    document.querySelector(".header").style.backgroundImage = "url(/bakery2.8448b89b.png)";
    document.querySelector('.header__description').style.color = '#e39a3b';
  })
  btn3.addEventListener('click', () => {
    document.querySelector(".header").style.backgroundImage = "url(/bakery3.06d04078.png)";
    document.querySelector('.header__description').style.color = '#412d22';
  })

  btn4.addEventListener('click', () => {
    document.querySelector(".header").style.backgroundImage = "url(/head.c6782c52.jpg)";
    document.querySelector('.header__description').style.color = '#412d22';
  })
  btn5.addEventListener('click', () => {
    document.querySelector(".header").style.backgroundImage = "url(/bakery2.8448b89b.png)";
    document.querySelector('.header__description').style.color = '#e39a3b';
  })
  btn6.addEventListener('click', () => {
    document.querySelector(".header").style.backgroundImage = "url(/bakery3.06d04078.png)";
    document.querySelector('.header__description').style.color = '#412d22';
  })
}
