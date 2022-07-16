'use strict';

console.log('Вёрстка валидная +10 \n Вёрстка семантическая +20 \n Вёрстка соответствует макету +48 \n Требования к css + 12 \n Интерактивность, реализуемая через css +20 \n Результат самооценки: 100');
new Swiper('.swiper-container'  , {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1.73,
    spaceBetween: 60,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    }
)

const humb = document.querySelector("#mobile__menu_button");
const popup = document.querySelector("#popup");
const li = document.querySelector('.menu__popup_ul');

humb.addEventListener("click", humbHandler);

function humbHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    popup.classList.remove("close");
}

const close = document.querySelector("#close");

close.addEventListener("click", closeHandler);

function closeHandler(e) {
    e.preventDefault();
    popup.classList.toggle("close");
    popup.classList.remove("open");
}

li.onclick = clickOnLi;
function clickOnLi() {
    popup.classList.add('close')
    popup.classList.remove('open');
}