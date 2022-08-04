'use strict';


// SLIDER

new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    breakpoints: {
        490: {
            slidesPerView: 1.73,
            initialSlide: 1,
        },
    },
    }
)


// ADAPTIVE MENU

const humb = document.querySelector("#mobile__menu_button");
const popup = document.querySelector("#popup");
const li = document.querySelector('.menu__popup_ul');
const close = document.querySelector("#close");

humb.addEventListener("click", humbHandler);

function humbHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    popup.classList.remove("close");
}

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


// POPUP

