import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 299999);

    cards(); 
    calc();
    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", 'tabheader__item_active');
    timer('.timer','2020-08-31');
    modal('[data-modal]', '.modal', modalTimerId); 
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextAroow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer______slider-inner2'
    });
});